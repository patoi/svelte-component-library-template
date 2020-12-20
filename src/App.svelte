<script>
  import Hello from './HelloComponent/index.svelte'
  import ByeBye from './ByeByeComponent/index.svelte'
  export let name
</script>

<Hello {name} />
<ByeBye {name} />
