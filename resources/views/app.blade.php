<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('assets/imagens/icon-e2a-talk.svg') }}" />
        <link rel="icon" type="image/png" href="{{ asset('assets/imagens/icon-e2a-talk.svg') }}" />

        <title inertia>{{ config('app.name', 'E2A Talk') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Popper -->
        <script src="https://unpkg.com/@popperjs/core@2"></script>

        <!-- Font Awesome Icons -->
        <link href="{{ asset('assets/fontawesome/css/all.min.css') }}" rel="stylesheet" />

        <!-- Nucleo Icons -->
        <link href="{{ asset('soft-ui/assets/css/nucleo-icons.css') }}" rel="stylesheet" />
        <link href="{{ asset('soft-ui/assets/css/nucleo-svg.css') }}" rel="stylesheet" />

        <!-- Main Styling -->
        <link href="{{ asset('soft-ui/assets/css/soft-ui-dashboard-tailwind.css?v=1.0.5') }}" rel="stylesheet" />

        <!-- Nepcha is a easy-to-use web analytics. No cookies and fully compliant with GDPR, CCPA and PECR. -->
        {{--<script defer data-site="YOUR_DOMAIN_HERE" src="https://api.nepcha.com/js/nepcha-analytics.js"></script>--}}

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>

    @inertia

    <!-- plugin for charts  -->
    <script src="{{ asset('soft-ui/assets/js/plugins/chartjs.min.js') }}" async></script>

    <!-- github button -->
    <script async defer src="https://buttons.github.io/buttons.js"></script>

    <!-- plugin for scrollbar  -->
    <script src="{{ asset('soft-ui/assets/js/plugins/perfect-scrollbar.min.js') }}" async></script>

    <!-- main script file  -->
    <script src="{{ asset('soft-ui/assets/js/soft-ui-dashboard-tailwind.js?v=1.0.5') }}" async></script>

</html>
