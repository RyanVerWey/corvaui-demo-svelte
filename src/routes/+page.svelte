<script lang="ts">
  import { base } from "$app/paths";
</script>

<section class="home-hero" aria-labelledby="home-title">
  <div class="home-copy">
    <corva-badge tone="warning">Deterministic preview · synthetic energy data</corva-badge>
    <corva-typography id="home-title" as="h1" variant="display">The energy transition belongs on your block.</corva-typography>
    <corva-typography variant="body">Common Ground helps neighborhoods own clean generation, share stored power, and keep essential places running when the larger grid cannot.</corva-typography>
    <div class="hero-actions">
      <corva-link href={`${base}/about`} variant="button">Find your program</corva-link>
      <corva-link href={`${base}/dashboard`} variant="standalone">See community impact</corva-link>
    </div>
    <div class="member-proof" aria-label="Community energy proof">
      <span><strong>5,428</strong> member homes</span>
      <span><strong>72%</strong> energy sourced locally</span>
      <span><strong>18 hrs</strong> average backup</span>
    </div>
  </div>
  <figure class="home-photo">
    <img src="{base}/images/common-ground-field.jpg" alt="Solar panels collecting afternoon light across a green community landscape" width="1800" height="1200" fetchpriority="high" />
    <figcaption><strong>East Ward</strong><span>Solar surplus is supplying 312 nearby homes.</span></figcaption>
  </figure>
</section>

<section class="manifesto" aria-labelledby="manifesto-title">
  <span class="manifesto-mark">CG</span>
  <div>
    <corva-typography id="manifesto-title" as="h2" variant="title">Not a utility plan. A neighborhood asset.</corva-typography>
    <p>Members help choose where generation is built, how resilience credits are shared, and which community services receive priority during an outage.</p>
  </div>
</section>

<section class="how-it-works" aria-labelledby="process-title">
  <div class="section-heading">
    <corva-badge tone="success">One connected system</corva-badge>
    <corva-typography id="process-title" as="h2" variant="title">Generate nearby. Store together. Share the value.</corva-typography>
  </div>
  <div class="process-grid">
    <article><span>Sun</span><h3>Local generation</h3><p>Schools, roofs, parking canopies, and community land become productive infrastructure.</p></article>
    <article><span>Store</span><h3>Shared resilience</h3><p>Neighborhood batteries protect essential loads and absorb low-cost local power.</p></article>
    <article><span>Return</span><h3>Member benefit</h3><p>Transparent credits and lower peaks send value back to the people who made it possible.</p></article>
  </div>
</section>

<section class="status-story" aria-labelledby="status-title">
  <div class="community-photo-stack" aria-label="Community solar in practice">
    <figure class="community-photo-primary">
      <img src="{base}/images/common-ground-array.jpg" alt="Rows of community solar panels beneath a broad summer sky" width="1600" height="1067" loading="lazy" />
      <figcaption><strong>72%</strong><span>local energy supplied today</span></figcaption>
    </figure>
    <figure class="community-photo-secondary">
      <img src="{base}/images/common-ground-home.jpg" alt="Neighborhood home producing electricity from rooftop solar" width="1600" height="900" loading="lazy" />
      <figcaption>1,184 member rooftops connected</figcaption>
    </figure>
  </div>
  <div class="status-copy">
    <corva-typography id="status-title" as="h2" variant="title">A grid that can explain itself.</corva-typography>
    <p>Members see where today's power came from, what the community stored, and how much value returned locally.</p>
    <corva-progress label="Local energy supplied today" value="72"></corva-progress>
    <corva-alert tone="success" heading="Resilience reserve ready">All critical community circuits can operate through tonight’s peak window.</corva-alert>
  </div>
</section>

<section class="closing-band">
  <div><span>Membership starts with your address.</span><h2>See what your neighborhood can build together.</h2></div>
  <corva-link href={`${base}/about`} variant="button">Compare programs</corva-link>
</section>
