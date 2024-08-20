import './MainPage.css';

function MainPage() {
    return (
        <div className="Main">
            <div className="SignContent">
                <div className="SignIn">Sign In </div>
                /
                <div className="SignUp"> Sign Up</div>
            </div>
            <div className="EmotionContent">
                Click your feelings!
                <div className="Emotions">
                    <div className="Smile">
                        😀
                    </div>
                    <div className="Love">
                        🥰
                    </div>
                    <div className="Sad">
                        😢
                    </div>
                    <div className="Tired">
                        🥱
                    </div>
                    <div className="Angry">
                        🤯
                    </div>
                </div>
            </div>
            <div className="LogsComponent">
                <div className="MyDailyLogs">
                    <div className="MyLogTitle">
                        My Daily Logs
                    </div>
                    <div className="MyDailyScrollComponent">
                        <div className="MyLog"></div>
                    </div>
                    <div className="MyDailyScrollComponent">
                        <div className="MyLog"></div>
                    </div>
                    <div className="MyDailyScrollComponent">
                        <div className="MyLog"></div>
                    </div>
                    <div className="MyDailyScrollComponent">
                        <div className="MyLog"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;