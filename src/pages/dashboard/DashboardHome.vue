<template>
  <q-page class="q-pa-lg">
    <div class="row q-col-gutter-lg">
      <!-- Welcome Section -->
      <div class="col-12">
        <h1 class="text-h4 text-weight-bold q-my-none">Dashboard</h1>
        <p class="text-grey-7 q-mt-sm">Welcome back! Here's what's happening today.</p>
      </div>

      <!-- Stats Cards -->
      <div class="col-12 col-md-4">
        <q-card flat class="bg-white rounded-lg q-pa-md shadow-1 hover-lift full-height">
          <q-item>
            <q-item-section avatar>
              <q-avatar color="blue-1" text-color="blue-8" icon="school" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption>Enrolled Classes</q-item-label>
              <q-item-label class="text-h4 text-weight-bold">3</q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card flat class="bg-white rounded-lg q-pa-md shadow-1 hover-lift full-height">
          <q-item>
            <q-item-section avatar>
              <q-avatar color="green-1" text-color="green-8" icon="history_edu" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption>Hours Learned</q-item-label>
              <q-item-label class="text-h4 text-weight-bold">24h</q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card flat class="bg-white rounded-lg q-pa-md shadow-1 hover-lift full-height">
          <q-item>
            <q-item-section avatar>
              <q-avatar color="purple-1" text-color="purple-8" icon="task_alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption>Assignments Due</q-item-label>
              <q-item-label class="text-h4 text-weight-bold">1</q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
      </div>

      <!-- Upcoming Classes -->
      <div class="col-12 col-md-8">
        <q-card flat class="bg-white rounded-lg shadow-1 h-full">
          <q-card-section class="row items-center justify-between">
            <div class="text-h6 text-weight-bold">Upcoming Classes</div>
            <q-btn flat dense no-caps color="primary" label="See all" />
          </q-card-section>
          <q-separator />
          <q-list>
            <q-item clickable v-ripple class="q-py-md">
              <q-item-section avatar>
                <div class="bg-grey-2 rounded-lg text-center q-pa-sm" style="width: 50px">
                  <div class="text-caption text-weight-bold text-uppercase text-grey-7">Jan</div>
                  <div class="text-h6 text-weight-bold">06</div>
                </div>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold text-subtitle1"
                  >Advanced Mathematics - Algebra</q-item-label
                >
                <q-item-label caption class="row items-center">
                  <q-icon name="schedule" size="xs" class="q-mr-xs" /> 08:00 AM - 10:00 AM
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn unelevated rounded color="black" text-color="white" label="Join" size="sm" />
              </q-item-section>
            </q-item>

            <q-separator inset />

            <q-item clickable v-ripple class="q-py-md">
              <q-item-section avatar>
                <div class="bg-grey-2 rounded-lg text-center q-pa-sm" style="width: 50px">
                  <div class="text-caption text-weight-bold text-uppercase text-grey-7">Jan</div>
                  <div class="text-h6 text-weight-bold">08</div>
                </div>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold text-subtitle1"
                  >Physics - Mechanics</q-item-label
                >
                <q-item-label caption class="row items-center">
                  <q-icon name="schedule" size="xs" class="q-mr-xs" /> 04:00 PM - 06:00 PM
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn outline rounded color="grey-7" label="Waiting" size="sm" disable />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <!-- Announcements / Updates -->
      <div class="col-12 col-md-4">
        <q-card flat class="bg-black text-white rounded-lg shadow-1 h-full q-pa-md">
          <q-card-section>
            <div class="text-h6 text-weight-bold q-mb-md">Exam Updates</div>
            <p class="text-grey-4">
              The final exam schedule has been released. Please check your email for the detailed
              timetable.
            </p>
            <q-btn outline color="white" label="View Schedule" class="full-width q-mt-sm" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup></script>

<style scoped>
.rounded-lg {
  border-radius: 16px;
}
.hover-lift {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
