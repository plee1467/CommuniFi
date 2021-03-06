import React from "react";

const Message = () =>

<div class="container">
<div class="col-sm-6 col-sm-offset-3">
    <h1><span class="fa fa-sign-in"></span> Signup</h1>

    {this.message.length > 0 } ?
        (<div class="alert alert-danger">{this.message}</div>) :
        (<div>No errors</div>)}



    <form action="/signup" method="post">
        <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" name="email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" name="password">
        </div>
        <button type="submit" class="btn btn-warning btn-lg">Signup</button>
    </form>
    <hr>
    <p>Already have an account? <a href="/login">Login</a></p>
    <p>Or go <a href="/">home</a>.</p>
</div>
</div>

export default Login;