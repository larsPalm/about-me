<script lang="ts">
  import "../styles/global.scss";
  import PrivacyModal from "../components/PrivacyModal.svelte";
  import ThemeToggle from "../components/ThemeToggle.svelte";
</script>

<header class="toolbar">
  <ThemeToggle />
</header>

<slot />

<footer class="footer">
  <PrivacyModal />
</footer>

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

  .footer {
    display: flex;
    justify-content: flex-end;
    width: min(1120px, calc(100% - 2rem));
    margin: 0 auto;
    padding: 1.25rem 0 2rem;
    border-top: 1px solid var(--border-color);
  }
</style>
