---
layout: post
title: The Team
---

<style>
  .person-intro {
    display: flex;
    align-items: flex-start; /* Aligns the items to the start of the cross axis */
    margin-bottom: 20px; /* Spacing between each instance */
  }

  .person-intro img {
    width: 150px; /* Adjust the image size as needed */
    height: 150px; /* Makes the image circular, should be the same as width */
    border-radius: 50%; /* Circular shape */
    margin-right: 20px; /* Spacing between image and text */
    object-fit: cover; /* Ensures the image covers the area without distortion */
  }

  .person-intro .info {
    flex-grow: 1;
  }
</style>

<body>

<div class="person-intro">
  <img src="assets/images/small.png" alt="Person 1">
  <div class="info">
    <h2>Name: Person 1</h2>
    <p>Interests: Interest 1, Interest 2, Interest 3</p>
  </div>
</div>

<div class="person-intro">
  <img src="assets/images/small.png" alt="Person 2">
  <div class="info">
    <h2>Name: Person 2</h2>
    <p>Interests: Interest 1, Interest 2, Interest 3</p>
  </div>
</div>
</body>

