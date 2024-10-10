<script lang="ts">
  import SearchSelect from './SearchSelect.svelte';

  let selectedUsers: any[] = [];

  async function fetchUsers(query: string) {
    const response = await fetch(`http://127.0.0.1:8000/users/?name=${encodeURIComponent(query)}`);
    if (response.ok) {
      return await response.json();
    }
    throw new Error("Error fetching users");
  }

  function userKey(item) {
    return item.user_id;
  }

  function userLabel(item) {
    return `${item.username} (${item.email})`; // Customize the label format
  }

  function userIcon(item) {
    return item.avatar || ''; // Fallback for avatar image
  }
</script>

<SearchSelect
  placeholder="Search for users..."
  fetchData={fetchUsers}
  itemKey={userKey}
  itemLabel={userLabel}
  itemIcon={userIcon}
  bind:selectedItems={selectedUsers}
/>
