<template>
    <header class="mb-2 w-100">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/"><img src="" width="75" height="30"><img></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/galeria">GALERIA</b-nav-item>
            <b-nav-item to="/quemsomos">QUEM SOMOS</b-nav-item>
            <b-nav-item to="/contato">CONTATO</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
              <b-nav-item class="mr-1 icon" href="#"><img src="@/assets/icons/facebook-w.png" width="22" height="22"><img></b-nav-item>
              <b-nav-item class="mr-2 icon" href="#"><img src="@/assets/icons/instagram-w.png" width="22" height="22"><img></b-nav-item>
              <b-nav-item class="btnWhats pr-2 pl-2" href="#">FALAR NO WHATSAPP</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
</template>

<script>
export default {

}
</script>

<style>
  .icon:hover {
    opacity: 0.7;
  }
  
  .btnWhats{
    border-style: solid;
    border-color: white;
    border-width: 2px;
  }

  .btnWhats:hover {
    background-color: rgb(255, 255, 255, 0.1);
  }


</style>