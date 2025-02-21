import { useState } from 'react'
import './Projects.css';
import stockPriceValidation from '../images/projects/stock-price-validation.png';
import stockPriceBacktest from '../images/projects/stock-price-backtest.png';
import legalpha from '../images/projects/legalpha.png';
import askTheDB from '../images/projects/ask-the-db.png';

function Projects() {
    const [showStockPrice, setShowStockPrice] = useState(false);
    const [showLegalpha, setShowLegalpha] = useState(false);
    const [showAskTheDB, setShowAskTheDB] = useState(false);

    return (
        <section id="projects">
            <h1>Projects</h1>
            <hr/>
            <h2>Stock Price Prediction</h2>
            <ul className="skills">
                <li>Time Series Forecasting</li>
                <li>PyTorch</li>
                <li>StatsModels</li>
            </ul> 
            <p className="project-summary"><b> AAPL stock price prediction using ARIMA, LSTM and transformers </b></p>
            {
                showStockPrice ?
                <div>
                    <p>
                        In this project, I built a time series model to predict the AAPL stock prices. 
                        Three different approaches, namely ARIMA, LSTMs and transformers, were tested.
                    </p>
                    <p>
                        Out of the three approaches listed above, the transformer model had the best results with 72% direction accuracy and 614.92% return on the validation data, 
                        while a buy and hold strategy was bringing 119.69% return.
                        <br/>(RMSE: 0.0159, R2: 38%, Direction Accuracy: 72%)
                    </p>
                    <p>
                        In the backtest period, this model maintained its performance with 75% accuracy and 465.45% return as well.
                        The returns were still significantly higher than the buy & hold approach yielding 132.74% return.
                        <br/>(RMSE: 0.0105, R2: 40%, Direction Accuracy: 75%)
                    </p>
                    <p>
                        * This is not a trading advice. For demo purposes only.
                    </p>
                </div>
                : ""
            }
            <p>
                <a href="https://github.com/egeatmaca/stock_price_prediction" target="__blank" rel="noreferrer" class="source-code">Source Code</a>
                <a className="details-btn" onClick={()=>setShowStockPrice(!showStockPrice)}>
                    {showStockPrice ? "^ Details" : "> Details"}
                </a>
            </p>
            <br/><br/>
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
                    alt="Stock Price Prediction Backtest Results"
                    loading="lazy"
                    className="chart"
                />
            </div>
            <hr />
            <h2>Legalpha</h2>
            <ul className="skills">
                <li>Text Classification</li>
                <li>Tensorflow</li>
                <li>FastAPI</li>
            </ul>
            <p className="project-summary"><b>Q&A chatbot for tenancy law leveraging intent classification with BERT embeddings</b></p>
            { 
                showLegalpha ?
                <div>
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
                </div>
                : ""
            }
            <p>
                <a href="https://github.com/egeatmaca/Legalpha" target="__blank" rel="noreferrer">Source Code</a>
                <a className="details-btn" onClick={()=>setShowLegalpha(!showLegalpha)}>
                    {showLegalpha ? "^ Details" : "> Details"}
                </a>
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
                <li>GenAI</li>
                <li>LangChain</li>
                <li>Streamlit</li>
                <li>SQLAlchemy</li>
            </ul>
            <p className="project-summary"><b>Natural language database query engine translating your db schema and questions to SQL queries</b></p>
            { 
                showAskTheDB ?
                <div>
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
                </div>
                : ""
            }
            <p>
                <a href="https://github.com/egeatmaca/AskTheDB" target="__blank" rel="noreferrer">Source Code</a>
                <a className="details-btn" onClick={()=>setShowAskTheDB(!showAskTheDB)}> 
                    {showAskTheDB ? "^ Details" : "> Details"}
                </a>
            </p>
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
  