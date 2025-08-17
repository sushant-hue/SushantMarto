<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>SushantFlux Store</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="topbar">
    <h1 class="brand">SushantFlux</h1>
    <div class="cart-btn" id="openCartBtn" aria-label="Open cart">
      🛒 <span id="cartCount">0</span>
    </div>
  </header>

  <main class="container">
    <section>
      <input id="search" class="search" type="search" placeholder="Search products…" />
      <div id="grid" class="grid"></div>
    </section>
  </main>

  <!-- Cart Drawer -->
  <aside id="cartDrawer" class="drawer">
    <div class="drawer-header">
      <h2>Your Cart</h2>
      <button id="closeCartBtn" class="icon-btn" aria-label="Close cart">✖</button>
    </div>
    <div id="cartItems" class="cart-items"></div>
    <div class="cart-footer">
      <div class="row">
        <span>Subtotal</span><strong id="subtotal">₹0</strong>
      </div>
      <div class="row small">Shipping calculated after order.</div>
      <button id="checkoutBtn" class="primary">Checkout on WhatsApp</button>
      <button id="clearBtn" class="muted">Clear Cart</button>
    </div>
  </aside>

  <div id="backdrop" class="backdrop"></div>

  <footer class="footer">
    <small>© <span id="year"></span> SushantFlux. All rights reserved.</small>
  </footer>

  <script src="script.js" defer></script>
</body>
</html>