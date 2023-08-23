<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import { Link } from '@inertiajs/vue3'

const showingNavigationDropdown = ref(false);

const app = getCurrentInstance();

onMounted(() => {
    checkWindowSize();
    $("#appScript").attr('src', window.location.origin + '/assets/js/app.js');
});

const toggleSidebar = () => {
    var window_size = getWindowSize();
    var sidebar_size = $("html").attr('data-sidebar-size');
    if(window_size == 'lg') {
        if(sidebar_size == 'lg') {
            $("html").attr('data-sidebar-size', 'sm');
            $(".hamburger-icon").addClass('open');
        } else {
            $("html").attr('data-sidebar-size', 'lg');
            $(".hamburger-icon").removeClass('open');
        }
    }
    $(".twocolumn-panel").addClass('vertical-sidebar-enable');
}

const closeSidebar = () => {
    $(".twocolumn-panel").removeClass('vertical-sidebar-enable');
}

const checkWindowSize = () => {
    if(getWindowSize() == 'sm') {
        $("body").addClass('twocolumn-panel');
    } else {
        $("body").removeClass('twocolumn-panel');
    }
}

const getWindowSize = () => {
    var size = $(window).width();
    if(size <= 768) {
        return 'sm';
    } else {
        return 'lg';
    }
}

const getCurrentMode = () => {
    return $("html").attr('data-layout-mode');
}

const changeMode = () => {
    var mode = getCurrentMode();
    if(mode == 'light') {
        $("html").attr('data-layout-mode', 'dark');
    } else {
        $("html").attr('data-layout-mode', 'light');
    }
}

// twocolumn-panel vertical-sidebar-enable
$(window).resize(function() {
    checkWindowSize();
});

</script>

<template>
    <div>
        <!-- Begin page -->
        <div id="layout-wrapper">

            <header id="page-topbar">
                <div class="layout-width">
                    <div class="navbar-header">
                        <div class="d-flex">
                            <!-- LOGO -->
                            <div class="navbar-brand-box horizontal-logo">
                                <a href="index.html" class="logo logo-dark">
                                    <span class="logo-sm">
                                        <img src="assets/images/logo-sm.png" alt="" height="22">
                                    </span>
                                    <span class="logo-lg">
                                        <img src="assets/images/logo-dark.png" alt="" height="17">
                                    </span>
                                </a>
    
                                <a href="index.html" class="logo logo-light">
                                    <span class="logo-sm">
                                        <img src="assets/images/logo-sm.png" alt="" height="22">
                                    </span>
                                    <span class="logo-lg">
                                        <img src="assets/images/logo-light.png" alt="" height="17">
                                    </span>
                                </a>
                            </div>
    
                            <button type="button" class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon" @click="toggleSidebar">
                                <span class="hamburger-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </button>
                        </div>
    
                        <div class="d-flex align-items-center">
    
                            <div class="ms-1 header-item d-none d-sm-flex">
                                <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode" @click="changeMode">
                                    <i class='bx bx-moon fs-22'></i>
                                </button>
                            </div>
    
                            <div class="dropdown ms-sm-3 header-item topbar-user">
                                <button type="button" class="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="d-flex align-items-center">
                                        <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar">
                                        <span class="text-start ms-xl-2">
                                            <span class="d-none d-xl-inline-block ms-1 fw-semibold user-name-text">Anna Adame</span>
                                            <span class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span>
                                        </span>
                                    </span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <!-- item-->
                                    <h6 class="dropdown-header">Welcome Anna!</h6>
                                    <a class="dropdown-item" href="pages-profile.html"><i class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Profile</span></a>
                                    <a class="dropdown-item" href="apps-chat.html"><i class="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Messages</span></a>
                                    <a class="dropdown-item" href="apps-tasks-kanban.html"><i class="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Taskboard</span></a>
                                    <a class="dropdown-item" href="pages-faqs.html"><i class="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Help</span></a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="pages-profile.html"><i class="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Balance : <b>$5971.67</b></span></a>
                                    <a class="dropdown-item" href="pages-profile-settings.html"><span class="badge bg-soft-success text-success mt-1 float-end">New</span><i class="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Settings</span></a>
                                    <a class="dropdown-item" href="auth-lockscreen-basic.html"><i class="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Lock screen</span></a>
                                    <a class="dropdown-item" href="auth-logout-basic.html"><i class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span class="align-middle" data-key="t-logout">Logout</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!-- Vertical Overlay-->
            <div class="vertical-overlay" @click="closeSidebar"></div>

            <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== -->
            <div class="main-content">

                <div class="page-content">
                    <div class="container-fluid">

                        <slot/>

                    </div>
                    <!-- container-fluid -->
                </div>
                <!-- End Page-content -->

                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                2023 © Velzon.
                            </div>
                            <div class="col-sm-6">
                                <div class="text-sm-end d-none d-sm-block">
                                    Design & Develop by Themesbrand
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <!-- end main content-->

        </div>
        <!-- END layout-wrapper -->



        <!--start back-to-top-->
        <button onclick="topFunction()" class="btn btn-danger btn-icon" id="back-to-top">
        <i class="ri-arrow-up-line"></i>
        </button>
        <!--end back-to-top-->

        <!--preloader-->
        <div id="preloader">
            <div id="status">
                <div class="spinner-border text-primary avatar-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    </div>
</template>
