<script lang="ts">
  import SearchSelect from './SearchSelect.svelte';

  let selectedTokens: any[] = [];

  // Fetch tokens from the API
  async function fetchTokens(query: string) {
    console.log("Fetching tokens for query:", query);
    
    try {
      const response = await fetch(`http://127.0.0.1:8000/crypto_token/?name=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error("Error fetching tokens");
      }
      
      // Convert the response to JSON
      const data = await response.json();
      console.log("Tokens received:", data); // Debugging
      return data;
      
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Return empty array in case of error
    }
  }

  function tokenKey(item) {
    return item.token_id;
  }

  function tokenLabel(item) {
    return `${item.name} (${item.symbol})`;
  }

  function tokenIcon(item) {
    return item.icon || '';
  }
</script>

<SearchSelect
  placeholder="Search for tokens..."
  fetchData={fetchTokens}
  itemKey={tokenKey}
  itemLabel={tokenLabel}
  itemIcon={tokenIcon}
  bind:selectedItems={selectedTokens}
/>
