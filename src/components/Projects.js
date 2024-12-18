import './Projects.css';
import stockPriceValidation from '../images/projects/stock-price-validation.png';
import stockPriceBacktest from '../images/projects/stock-price-backtest.png';
import legalpha from '../images/projects/legalpha.png';
import askTheDB1 from '../images/projects/ask-the-db-1.png';
import askTheDB2 from '../images/projects/ask-the-db-2.png';

function Projects() {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <hr />
            <h2>Stock Price Prediction</h2>
            <ul className="skills">
                <li>Python</li>
                <li>PyTorch</li>
                <li>StatsModels</li>
                <li>ARIMA</li>
                <li>LSTM</li>
                <li>Transformers</li>
            </ul>
            <p>
                In this project, I built a time series model to predict the AAPL stock prices. 
                I tested three different approaches, namely ARIMA, LSTMs and Transformers. 
            </p>
            <p>
                The transformer model yielded the best returns with 614.92% on the validation data. 
                <br/>(RMSE: 0.0159, Direction Accuracy: 72%)
            </p>
            <p>
                After retraining with the new data, this model maintained its performance with 465.45% in the backtest period as well. 
                <br/>(RMSE: 0.0105, Direction Accuracy: 75%)
            </p>
            <p><a href="https://github.com/egeatmaca/stock_price_prediction" target="__blank">Source Code</a></p>
            <br />
            <b>Validation: 21/01/2022 - 29/06/2023</b>
            <div className="screenshot">
                <img
                    src={stockPriceValidation}
                    width="100%"
                    alt="Stock Price Prediction Validation Results"
                    loading="lazy"
                    className="chart"
                />
            </div>
            <b>Backtest: 07/07/2023 - 10/12/2024</b>
            <div className="screenshot">
                <img
                    src={stockPriceBacktest}
                    width="100%"
                    alt="Stock Price Prediction Validation Results"
                    loading="lazy"
                    className="chart"
                />
            </div>
            <hr />
            <h2>Legalpha</h2>
            <ul className="skills">
                <li>Python</li>
                <li>Tensorflow</li>
                <li>FastAPI</li>
                <li>Docker</li>
            </ul>
            <p>
                Lorem ipsum. Lorem ipsum. Lorem ipsum.<br/>
                <p><a href="https://github.com/egeatmaca/Legalpha" target="__blank">Source Code</a></p>
            </p>
            <br />
            <div className="screenshot">
                <img
                    src={legalpha}
                    width="100%"
                    alt="Legalpha Screenshot"
                    loading="lazy"
                />
            </div>
            <hr />
            <h2>AskTheDB</h2>
            <ul className="skills">
                <li>Python</li>
                <li>LangChain</li>
                <li>Streamlit</li>
                <li>SQLAlchemy</li>
                <li>Docker</li>
            </ul>
            <p>
                Lorem ipsum. Lorem ipsum. Lorem ipsum.<br/>
                <p><a href="https://github.com/egeatmaca/AskTheDB" target="__blank">Source Code</a></p>
            </p>
            <br />
            <div className="screenshot">
                <img
                    src={askTheDB1}
                    width="100%"
                    alt="AskTheDB Screenshot 1"
                    loading="lazy"
                />
                <img
                    src={askTheDB2}
                    width="100%"
                    alt="AskTheDB Screenshot 2"
                    loading="lazy"
                />
            </div>
            <hr />
        </section>
    );
}

export default Projects;
  