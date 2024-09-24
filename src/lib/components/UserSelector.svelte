<!-- TwitterUserSelector.svelte -->
<script lang="ts">
    import SearchSelect from './SearchSelect.svelte';
  
    // Example Twitter user list
    let allUsers = [
      { name: 'Elon Musk', handle: '@elonmusk' },
      { name: 'Bill Gates', handle: '@BillGates' },
      { name: 'Jeff Bezos', handle: '@JeffBezos' },
      { name: 'Barack Obama', handle: '@BarackObama' },
      { name: 'Taylor Swift', handle: '@taylorswift13' },
      // Add more users as needed
    ];
  
    let selectedUsers = [];
  
    // Function to get display label for each user
    const userLabel = (user) => `${user.name} (${user.handle})`;
  
    // Function to get a unique key for each user
    const userKey = (user) => user.handle;
  </script>
  
  <SearchSelect
    items={allUsers}
    placeholder="Search for a User..."
    bind:selectedItems={selectedUsers}
    itemLabel={userLabel}
    itemKey={userKey}
  />
  