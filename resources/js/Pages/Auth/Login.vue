<script setup>
import {Head, Link, useForm} from '@inertiajs/vue3';
import AuthLayout from "@/Layouts/AuthLayout.vue";
import ApplicationLogo from "@/Components/old/ApplicationLogo.vue";
import InputError from "@/Components/old/InputError.vue";
import InputLabel from "@/Components/old/InputLabel.vue";
import InputSoftUi from "@/Components/Softui/Form/InputSoftUi.vue";
import Checkbox from "@/Components/old/Checkbox.vue";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head :title="__('login.signin')" />

    <AuthLayout>
        <section>
            <div class="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
                <div class="container z-10">
                    <div class="flex flex-wrap mt-0 -mx-3">
                        <div class="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                            <div class="relative flex flex-col min-w-0 mt-5 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                <div class="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                                    <ApplicationLogo class="w-56" />
                                    <p class="mb-0 mt-3">{{ __('login.title') }}</p>
                                </div>
                                <div class="flex-auto p-6">
                                    <form role="form" @submit.prevent="submit">
                                        <div class="mb-4">
                                            <InputLabel for="email" :value="__('login.email')" />
                                            <InputSoftUi
                                                id="email"
                                                v-model="form.email"
                                                type="email"
                                                class="mt-1 block w-full"
                                                :placeholder="__('login.email')"
                                                aria-label="Email"
                                                aria-describedby="email-addon"
                                                required
                                                autofocus
                                                autocomplete="username"
                                            />
                                            <InputError class="mt-2" :message="form.errors.email" />
                                        </div>
                                        <div class="mb-4">
                                            <InputLabel for="password" :value="__('login.password')" />
                                            <InputSoftUi
                                                id="password"
                                                v-model="form.password"
                                                type="password"
                                                class="mt-1 block w-full"
                                                :placeholder="__('login.password')" aria-label="Password" aria-describedby="password-addon"
                                                required
                                                autocomplete="current-password"
                                            />
                                            <InputError class="mt-2" :message="form.errors.password" />
                                        </div>
                                        <div class="min-h-6 mb-0.5 block">
                                            <label class="flex items-center">
                                                <Checkbox v-model:checked="form.remember" name="remember" />
                                                <span class="ms-2 text-sm text-gray-600">{{ __('login.remember')}}</span>
                                            </label>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-sky-600 to-cyan-300 hover:scale-102 hover:shadow-soft-xs active:opacity-85">{{ __('login.signin')}}</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                                    <p v-if="canResetPassword" class="mx-auto mb-6 leading-normal text-sm">
                                        {{ __('login.notaccount')}}
                                        <Link :href="route('register')" class="relative z-10 font-semibold text-cyan-600">{{ __('login.signup')}}</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                            <div class="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block">
                                <div class="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10" style="background-image: url('../assets/imagens/bg-atendimento.png')"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </AuthLayout>
</template>
