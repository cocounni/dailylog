import './Main.css';

function Main() {
    return (
        <div className="Main">
            {/* <Routes>
            <Route path="/Login" element={<Login />} />
          </Routes> */}
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
        </div>
    )
}

export default Main;