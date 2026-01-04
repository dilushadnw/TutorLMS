<template>
  <q-page class="q-pa-lg">
    <div class="row q-col-gutter-lg">
      <div class="col-12">
        <h1 class="text-h4 text-weight-bold q-my-none">Admin Dashboard</h1>
        <p class="text-grey-7 q-mt-sm">System Overview for TutorLMS</p>
      </div>

      <!-- Admin Stats -->
      <div class="col-12 col-md-3">
        <q-card flat class="bg-black text-white rounded-lg q-pa-md shadow-2">
          <div class="text-subtitle2 text-grey-4">Total Students</div>
          <div class="text-h3 text-weight-bold q-mt-sm">1,204</div>
          <div class="row items-center q-mt-md text-green-4">
            <q-icon name="arrow_upward" size="xs" />
            <span class="text-caption q-ml-xs">+12% this month</span>
          </div>
        </q-card>
      </div>

      <div class="col-12 col-md-3">
        <q-card flat class="bg-white rounded-lg q-pa-md shadow-1">
          <div class="text-subtitle2 text-grey-7">Active Classes</div>
          <div class="text-h3 text-weight-bold q-mt-sm text-primary">24</div>
        </q-card>
      </div>

      <div class="col-12 col-md-3">
        <q-card flat class="bg-white rounded-lg q-pa-md shadow-1">
          <div class="text-subtitle2 text-grey-7">Total Revenue</div>
          <div class="text-h3 text-weight-bold q-mt-sm text-primary">$12k</div>
        </q-card>
      </div>

      <div class="col-12 col-md-3">
        <q-card flat class="bg-white rounded-lg q-pa-md shadow-1">
          <div class="text-subtitle2 text-grey-7">System Health</div>
          <div class="text-h3 text-weight-bold q-mt-sm text-green-6">98%</div>
        </q-card>
      </div>

      <!-- Recent Registrations Table (Mock) -->
      <div class="col-12">
        <q-card flat class="bg-white rounded-lg shadow-1">
          <q-card-section>
            <div class="text-h6 text-weight-bold">Recent Registrations</div>
          </q-card-section>
          <q-markup-table flat :separator="'horizontal'">
            <thead>
              <tr class="text-left text-grey-8">
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-weight-bold">Dilusha DNW</td>
                <td>dilusha@gmail.com</td>
                <td>2026-01-05</td>
                <td><q-badge color="green" label="Admin" /></td>
              </tr>
              <tr>
                <td>Kasun Perera</td>
                <td>kasun@example.com</td>
                <td>2026-01-04</td>
                <td><q-badge color="blue" label="Student" /></td>
              </tr>
              <tr>
                <td>Amal Silva</td>
                <td>amal@example.com</td>
                <td>2026-01-04</td>
                <td><q-badge color="blue" label="Student" /></td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup></script>

<style scoped>
.rounded-lg {
  border-radius: 12px;
}
</style>
