import logo from './logo.svg';
import './App.css';
import img1 from './images/college.png';
import img2 from './images/main.png';

function App() {
  return (
    <div>
    <div className="frame">
        {/* <!--  part 1 -- column1 man image icon --> */}
        <div className="overlap-img">
            <img className="man-img" src={img2} alt="main icon"/>
        </div>

        {/* <!-- part 2 -- all login contents --> */}
        <div className="details">
            <div className="card-body">
                {/* <!--  college logo --> */}
                <img src={img1} alt="" className="logo-img"/>

                {/* <!-- login form --> */}
                <form className="form-box px-3">

                    <div className="form-input user">
                        <span><i className="fa fa-envelope-o"></i></span>
                        <input className="form-control form-control-lg" type="email" name="" placeholder="Username" tabindex="10" required=""/>
                    </div>

                    <div className="form-input user">
                        <span><i className="fa fa-key"></i></span>
                        <input className="form-control form-control-lg" type="password" name="" placeholder="Password" required=""/>
                    </div>




                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="cb1" name=""/>
                            <label className="custom-control-label" for="cb1">Remember me</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary text-uppercase">
                            Login
                        </button>
                    </div>
                    
                    <div className="text-right">
                        <a href="#" className="forget-link">
                            Forget Password?
                        </a>
                    </div>

                    <div className="text-right">
                        <a href="#" className="register-link">
                            Register here
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
