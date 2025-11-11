<script setup lang="ts">
import DashboardLayout from '@/components/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout>
    <header class="main-header">
      <h1>Welcome to your Dashboard</h1>
    </header>
    <div class="content-area">
      <p>This is where your main content will go. You can start building out your dashboard widgets and components
        here.</p>
    </div>
  </DashboardLayout>
</template>

<style scoped>
.main-header h1 {
  font-size: 2rem;
  font-weight: 500;
  color: var(--color-heading);
  margin-bottom: 2rem;
}

.content-area {
  color: var(--color-text);
}
</style>
