<script lang="ts">
  import "../styles/global.scss";
  import LangToggle from "../components/LangToggle.svelte";
  import PrivacyModal from "../components/PrivacyModal.svelte";
  import ThemeToggle from "../components/ThemeToggle.svelte";
</script>

<header class="toolbar">
  <PrivacyModal />
  <LangToggle />
  <ThemeToggle />
</header>

<slot />

<style>
  .toolbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.65rem;
    width: min(1120px, calc(100% - 2rem));
    margin: 0 auto;
    padding-top: 1rem;
  }
</style>
