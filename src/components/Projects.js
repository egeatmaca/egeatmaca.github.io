import './Projects.css';
import stockPriceValidation from '../images/projects/stock-price-validation.png';
import stockPriceBacktest from '../images/projects/stock-price-backtest.png';
import legalpha from '../images/projects/legalpha.png';
import askTheDB from '../images/projects/ask-the-db.png';

function Projects() {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <hr/>
            <h2>Stock Price Prediction</h2>
            <ul className="skills">
                <li>Time Series Forecasting</li>
                <li>Python</li>
                <li>PyTorch</li>
                <li>StatsModels</li>
            </ul>
            <p>
                In this project, I built a time series model to predict the AAPL stock prices. 
                Three different approaches, namely ARIMA, LSTMs and transformers, were tested.
            </p>
            <p>
                Out of the three approaches listed above, the transformer model yielded the best return with 614.92% on the validation data, 
                while a buy and hold strategy was bringing 119.69% return.
                <br/>(RMSE: 0.0159, R2: 38%, Direction Accuracy: 72%)
            </p>
            <p>
                After retraining with new data, this model maintained its performance with 465.45% return in the backtest period as well.
                The returns were still significantly higher than the buy & hold approach yielding 132.74% return.
                <br/>(RMSE: 0.0105, R2: 40%, Direction Accuracy: 75%)
            </p>
            <p>
                * This is not a trading advice. For demo purposes only.
            </p>
            <p><a href="https://github.com/egeatmaca/stock_price_prediction" target="__blank" rel="noreferrer">Source Code</a></p>
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
                <li>Text Classification</li>
                <li>Python</li>
                <li>Tensorflow</li>
                <li>FastAPI</li>
                <li>Javascript</li>
                <li>Docker</li>
            </ul>
            <p>
                For equal rights everyone should have equal access to legal information. 
                However, laws are always encrypted in some mysterious language, especially if you are living in a foreign country.
            </p>
            <p>
                This is why I developed Legalpha. A Q&A chatbot answering questions about German tenancy law in an easy to digest language.
            </p>
            <p>
                For this purpose, I trained a good old intent classifier leveraging BERT sentence embeddings as inputs. 
                (No GenAI or hallucinations are involved.)
                After classifying your intent, Legalpha replies with as many references as possible to the actual legal paragraphs.
                So, you can double-check the information it provides.
                It's built to be as reliable as possible considering the application challenges of ML in the legal space.
            </p>
            <p>
                Currently, it can answer questions in 36 different topics about contract termination and deposit with 95% accuracy.
            </p>
            <p><a href="https://github.com/egeatmaca/Legalpha" target="__blank" rel="noreferrer">Source Code</a></p>
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
                <li>GenAI</li>
                <li>Python</li>
                <li>LangChain</li>
                <li>Streamlit</li>
                <li>SQLAlchemy</li>
                <li>Docker</li>
            </ul>
            <p>
                To leverage data analytics in an organization fully, we should engage domain experts in analytical processes as well. 
                Using their domain knowledge, they can ask pretty good questions to data. 
                These questions often lead to valuable and actionable insights. 
                However, most domain experts don't have the technical skills to interact with data and get the answers.
            </p>
            <p>
                AskTheDB enables users to ask questions in natural language and get results from their databases. 
                It translates the database schema and user questions to SQL queries using the ChatGPT API.
                Then brings the results from your database.
            </p>
            <p><a href="https://github.com/egeatmaca/AskTheDB" target="__blank" rel="noreferrer">Source Code</a></p>
            <br />
            <div className="screenshot">
                <img
                    src={askTheDB}
                    width="100%"
                    alt="AskTheDB Screenshot"
                    loading="lazy"
                />
            </div>
        </section>
    );
}

export default Projects;
  