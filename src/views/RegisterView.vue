<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div class="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
            <div class="flex justify-center">
                <img alt="Wdlnds logo" class="wdlnds-logo w-48 mb-6" src="@/assets/logo.svg" />
            </div>
            <h2 class="text-2xl font-bold text-center">Create an Account</h2>
            <form class="space-y-6" @submit.prevent="handleRegister">
                <div>
                    <label for="firstname" class="block mb-2 text-sm font-medium">First Name</label>
                    <input id="firstname" v-model="firstName" name="firstname" type="text" autocomplete="given-name"
                        required
                        class="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                    <label for="lastname" class="block mb-2 text-sm font-medium">Last Name</label>
                    <input id="lastname" v-model="lastName" name="lastname" type="text" autocomplete="family-name"
                        required
                        class="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium">Email address</label>
                    <input id="email" v-model="email" name="email" type="email" autocomplete="email" required
                        class="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>

                <div>
                    <label for="password" class="block mb-2 text-sm font-medium">Password</label>
                    <input id="password" v-model="password" name="password" type="password" autocomplete="new-password"
                        required
                        class="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>

                <div>
                    <label for="confirm-password" class="block mb-2 text-sm font-medium">Confirm
                        Password</label>
                    <input id="confirm-password" v-model="confirmPassword" name="confirm-password" type="password"
                        autocomplete="new-password" required
                        class="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>

                <div>
                    <button type="submit"
                        class="w-full px-4 py-2 font-bold text-gray-900 bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Register
                    </button>
                </div>
            </form>
            <div class="text-sm text-center">
                <router-link to="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Already have an account? Sign in
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()

const handleRegister = () => {
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match")
        return
    }
    // Handle registration logic here
    console.log('Registering with', firstName.value, lastName.value, email.value, password.value)
    router.push('/')
}
</script>
<style lang="css" scoped>
input {
    margin-bottom: 1em;
}

button {
    margin-top: 1em;
    margin-bottom: 1em;
}
</style>
