<script>
    import { onMount } from "svelte";
    import "../styles/global.scss"; // Import the global styles for theme
    import { theme } from "../stores/themeStore";

    let darkMode = true;

    // Check for the theme preference when the component mounts
    onMount(() => {
        darkMode = document.documentElement.classList.contains("dark-mode");
        theme.set("dark");
    });

    // Function to toggle the theme
    const toggle = () => {
        darkMode = !darkMode;
        if (darkMode) {
            document.documentElement.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
            $theme === "dark" ? theme.set("light") : theme.set("dark");
        } else {
            document.documentElement.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
            $theme === "light" ? theme.set("dark") : theme.set("light");
        }
    };
</script>

<div class="theme-toggle-container">
    <!-- Switch toggle for light/dark mode -->
    <label class="switch">
        <input type="checkbox" checked={darkMode} on:change={toggle} />
        <span class="slider"></span>
    </label>

    <!-- Use Sun and Moon emojis instead of text -->
    <span class="emoji">{darkMode ? "🌙" : "☀️"}</span>
</div>

<style>
    .theme-toggle-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
        border-radius: 34px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        border-radius: 50%;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: #2196f3;
    }

    input:checked + .slider:before {
        transform: translateX(26px);
    }

    .emoji {
        margin-left: 10px;
        font-size: 20px;
    }
</style>
