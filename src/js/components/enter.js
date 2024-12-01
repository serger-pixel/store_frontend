var En = function Enter(){
    return(
        <div id="enterDiv">
            <br></br>
            <form id="entForm" method="post">
                <input type="text" id="log" name="login"/>
                <label for="log">Логин</label><br/>
                <divEr id="logErr"></divEr>
                <br/><br/>
                <input type="text" id="pass" name="password"/>
                <label for="pass">Пароль</label><br/>
                <divEr id="passErr"></divEr>
                <br/>
                <div id="ExtraEr"></div>
                <button id="enterB" type="submit">Войти</button>
                <br/><br></br>
            </form>
        </div>
    );
}

export default En;