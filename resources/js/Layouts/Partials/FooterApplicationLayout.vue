<script setup>
const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()
</script>

<template>
    <footer class="pb-3">
        <div class="w-full px-6 mx-auto">
            <div class="flex flex-wrap items-center -mx-3 lg:justify-between">
                <div class="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                    <div class="text-sm leading-normal text-center text-slate-500 lg:text-left">
                        © 2014 - {{ anoAtual }}
                        Desenvolvido por
                        <a href="https://e2adigital.com" class="font-semibold text-slate-700" target="_blank">E2A Soluções Digitais</a>
                        - Versão 1.0.1
                    </div>
                </div>
                <div class="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                    <ul class="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                        <li class="nav-item">
                            <a href="" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" target="_blank">Termo de Uso</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" target="_blank">Sobre</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" target="_blank">Dúvidas</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" target="_blank">Licença</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
