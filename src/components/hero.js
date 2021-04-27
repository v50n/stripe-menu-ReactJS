import phone from './../images/phone.svg';
import './../css/hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>
                Payments infrastructure for the internet
                </h1>
                <p>
                Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
                </p>
                <button className="btn-start">
                    Start now
                </button>
            </div>
            <div className="hero-image">
                <img src={phone} alt="phone"/>
            </div>
        </section>
    );
}

export default Hero;