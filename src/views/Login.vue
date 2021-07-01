<template>
    <form action="/api/login" method="get">
    <div>
        <label>Username:</label>
        <input type="text" name="username"/><br/>
    </div>
    <div>
        <label>Password:</label>
        <input type="text" name="password"/><br/>
    </div>
    <div>
        <input type="submit" value="Sign In"/>
    </div>
</form>
</template>

<script>

export default {
    name: 'Login',
    data () {
        return {
        }
    }
}
</script>

<style>

</style>