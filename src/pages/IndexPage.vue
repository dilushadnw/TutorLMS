<template>
  <q-page class="bg-white overflow-hidden">
    <!-- Hero Section -->
    <section class="hero-section column relative-position">
      <!-- Background Elements -->
      <div
        class="absolute-top-right bg-grey-2 rounded-circle blur-3xl opacity-50"
        style="width: 600px; height: 600px; right: -150px; top: -200px; z-index: 0"
      ></div>
      <div
        class="absolute-bottom-left bg-grey-3 rounded-circle blur-3xl opacity-30"
        style="width: 500px; height: 500px; left: -100px; bottom: -100px; z-index: 0"
      ></div>

      <!-- Embedded Navigation -->
      <div class="full-width q-pt-lg relative-position z-10">
        <div class="container q-mx-auto q-px-md">
          <q-toolbar class="text-primary q-px-none">
            <q-btn flat no-caps no-wrap dense to="/" class="q-mr-sm">
              <q-avatar size="36px" color="black" text-color="white" icon="school" />
              <q-toolbar-title
                class="text-weight-bold q-ml-sm text-h6"
                style="letter-spacing: -0.5px"
              >
                TutorLMS
              </q-toolbar-title>
            </q-btn>

            <q-space />

            <div class="gt-sm row q-gutter-x-lg">
              <q-btn flat no-caps label="Features" class="text-weight-medium" />
              <q-btn flat no-caps label="Classes" class="text-weight-medium" />
              <q-btn flat no-caps label="About Us" class="text-weight-medium" />
              <q-btn flat no-caps label="Contact" class="text-weight-medium" />
            </div>

            <q-space />

            <div class="row q-gutter-x-sm items-center">
              <q-btn
                class="gt-xs text-weight-bold"
                flat
                no-caps
                color="dark"
                label="Log in"
                to="/login"
              />
              <q-btn
                unelevated
                rounded
                no-caps
                color="black"
                text-color="white"
                label="Get Started"
                padding="8px 24px"
                to="/register"
              />

              <!-- Mobile Menu -->
              <q-btn flat round icon="menu" class="lt-md q-ml-sm">
                <q-menu transition-show="jump-down" transition-hide="jump-up">
                  <q-list style="min-width: 200px">
                    <q-item clickable v-close-popup>
                      <q-item-section>Features</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section>Classes</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section>About Us</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section>Contact</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable v-close-popup to="/login">
                      <q-item-section class="text-primary text-weight-bold">Log in</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </q-toolbar>
        </div>
      </div>

      <!-- Hero Content -->
      <div class="container q-mx-auto text-center q-px-md z-10 col flex flex-center column">
        <div class="fade-in-up">
          <q-badge
            color="grey-1"
            text-color="black"
            label="The Future of Tuition"
            class="q-px-lg q-py-sm text-subtitle2 q-mb-lg border-gray shadow-1"
            rounded
          />

          <h1
            class="text-h3 text-md-h1 text-weight-bolder text-primary q-mt-none q-mb-md gt-sm"
            style="line-height: 1.1; letter-spacing: -2.5px"
          >
            Live Classes. <br />
            <span class="text-grey-4">Recordings.</span> Results.
          </h1>
          <!-- Mobile Headline -->
          <h1
            class="text-h3 text-weight-bolder text-primary q-mt-none q-mb-md lt-md"
            style="line-height: 1.1; letter-spacing: -1.5px"
          >
            Live Classes. <br />
            <span class="text-grey-4">Results.</span>
          </h1>

          <p
            class="text-h6 text-grey-7 q-mx-auto text-weight-normal q-mt-md"
            style="max-width: 650px; line-height: 1.5"
          >
            Join your classes live, watch recordings anytime, and manage your monthly payments
            securely. Experience the new standard in education.
          </p>
        </div>

        <div class="row q-gutter-md justify-center fade-in-up delay-200 q-mt-lg">
          <q-btn
            unelevated
            rounded
            color="black"
            text-color="white"
            size="lg"
            padding="12px 42px"
            no-caps
            label="Join Class Now"
            icon-right="videocam"
            class="shadow-5 hover-scale"
            to="/register"
          />
          <q-btn
            outline
            rounded
            color="black"
            size="lg"
            padding="12px 42px"
            no-caps
            label="Class Schedule"
            class="bg-white hover-scale"
          />
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="q-py-xl bg-black text-white relative-position overflow-hidden">
      <!-- Gradient overlay -->
      <div class="absolute-full bg-gradient-dark opacity-50 mobile-hide"></div>

      <div class="container q-mx-auto q-px-md relative-position z-10">
        <div class="row justify-between text-center q-col-gutter-y-xl">
          <div class="col-xs-6 col-md-3">
            <q-icon name="groups" size="md" color="grey-5" class="q-mb-sm" />
            <div class="text-h4 text-md-h3 text-weight-bold">100%</div>
            <div class="text-subtitle1 text-grey-5">Live Interaction</div>
          </div>
          <div class="col-xs-6 col-md-3">
            <q-icon name="hd" size="md" color="grey-5" class="q-mb-sm" />
            <div class="text-h4 text-md-h3 text-weight-bold">HD</div>
            <div class="text-subtitle1 text-grey-5">Video Recordings</div>
          </div>
          <div class="col-xs-6 col-md-3">
            <q-icon name="lock" size="md" color="grey-5" class="q-mb-sm" />
            <div class="text-h4 text-md-h3 text-weight-bold">Secure</div>
            <div class="text-subtitle1 text-grey-5">Payment Gateway</div>
          </div>
          <div class="col-xs-6 col-md-3">
            <q-icon name="schedule" size="md" color="grey-5" class="q-mb-sm" />
            <div class="text-h4 text-md-h3 text-weight-bold">24/7</div>
            <div class="text-subtitle1 text-grey-5">Access</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="q-py-xl bg-grey-1 relative-position">
      <div class="container q-mx-auto q-px-md">
        <div class="text-center q-mb-xl">
          <h2 class="text-h4 text-md-h3 text-weight-bold text-primary q-mb-sm">
            Everything You Need
          </h2>
          <p class="text-subtitle1 text-grey-7">To excel in your studies without the hassle.</p>
        </div>

        <div class="row q-col-gutter-lg">
          <!-- Feature 1: Live Classes -->
          <div class="col-xs-12 col-md-4">
            <q-card
              flat
              class="feature-card q-pa-lg bg-white full-height rounded-lg cursor-pointer"
            >
              <q-card-section>
                <div class="row items-center justify-between q-mb-md">
                  <q-avatar
                    icon="videocam"
                    color="grey-2"
                    text-color="black"
                    size="60px"
                    font-size="28px"
                  />
                  <q-icon name="arrow_outward" color="grey-5" size="sm" />
                </div>
                <div class="text-h5 text-weight-bold q-mb-sm">Live Classes</div>
                <p class="text-grey-8">
                  Join interactive live sessions with your tutors. Ask questions and engage in
                  real-time with high-quality streaming.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <!-- Feature 2: Recordings -->
          <div class="col-xs-12 col-md-4">
            <q-card
              flat
              class="feature-card q-pa-lg bg-white full-height rounded-lg cursor-pointer"
            >
              <q-card-section>
                <div class="row items-center justify-between q-mb-md">
                  <q-avatar
                    icon="smart_display"
                    color="grey-2"
                    text-color="black"
                    size="60px"
                    font-size="28px"
                  />
                  <q-icon name="arrow_outward" color="grey-5" size="sm" />
                </div>
                <div class="text-h5 text-weight-bold q-mb-sm">Class Recordings</div>
                <p class="text-grey-8">
                  Never miss a lesson. Infinite access to high-quality recordings whenever you need
                  to revise.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <!-- Feature 3: Payments -->
          <div class="col-xs-12 col-md-4">
            <q-card
              flat
              class="feature-card q-pa-lg bg-white full-height rounded-lg cursor-pointer"
            >
              <q-card-section>
                <div class="row items-center justify-between q-mb-md">
                  <q-avatar
                    icon="credit_score"
                    color="grey-2"
                    text-color="black"
                    size="60px"
                    font-size="28px"
                  />
                  <q-icon name="arrow_outward" color="grey-5" size="sm" />
                </div>
                <div class="text-h5 text-weight-bold q-mb-sm">Easy Payments</div>
                <p class="text-grey-8">
                  Pay your monthly class fees instantly and securely through the integrated gateway.
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA and Footer Placeholder -->
    <section class="q-py-xl bg-white text-center">
      <div class="container q-mx-auto q-px-md">
        <div class="bg-black text-white rounded-lg q-pa-xl shadow-20">
          <h2 class="text-h3 text-weight-bold q-mt-none q-mb-md">Ready to Start?</h2>
          <p class="text-subtitle1 text-grey-4 q-mb-xl">
            Join thousands of students and tutors today using the most advanced learning platform.
          </p>
          <q-btn
            unelevated
            color="white"
            text-color="black"
            size="lg"
            label="Create Free Account"
            padding="12px 32px"
            no-caps
            class="text-weight-bold"
            to="/register"
          />
        </div>
      </div>
    </section>
  </q-page>
</template>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
}

.rounded-lg {
  border-radius: 24px;
}

.rounded-circle {
  border-radius: 50%;
}

.blur-3xl {
  filter: blur(80px);
}

.opacity-50 {
  opacity: 0.5;
}
.opacity-30 {
  opacity: 0.3;
}

.z-10 {
  z-index: 10;
}
.z-top {
  z-index: 20;
}

/* Animations */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.delay-200 {
  animation-delay: 0.2s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-section {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.feature-card {
  border: 1px solid #f0f0f0;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
  border-color: #000;
}

.hover-lift {
  transition: transform 0.2s ease;
}
.hover-lift:hover {
  transform: translateY(-2px);
}

.hover-scale {
  transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.hover-scale:hover {
  transform: scale(1.05);
}

.border-gray {
  border: 1px solid #e0e0e0;
}
</style>
