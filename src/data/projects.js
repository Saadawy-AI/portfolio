import ikea from "../assets/ikea.webp";
import smartcity from "../assets/smartcity.webp";
import road from "../assets/road.webp";
import spam from "../assets/spam.webp";

const projects = [
  {
    slug: "ikea-shopping-analytics-platform",
    title: "IKEA Shopping Analytics Platform",
    category: "Data Engineering + ML + Analytics",
    image: ikea,
    problem:
      "An e-commerce admin workflow needed a cleaner way to move transactional sales data into analytics and forecasting.",
    solution:
      "Built a Java Swing and SQL Server OLTP layer, then designed ETL jobs, a star-schema warehouse, XGBoost forecasting, and a Streamlit analytics dashboard.",
    impact:
      "Delivered a complete OLTP to warehouse to forecasting flow with a deployed dashboard for business-style analysis.",
    architecture:
      "Java Swing App -> SQL Server -> Python ETL -> SQLite star schema -> XGBoost forecasting -> Streamlit dashboard.",
    flow: [
      "Java Swing App",
      "SQL Server OLTP",
      "Python ETL",
      "Star Schema",
      "XGBoost",
      "Streamlit",
    ],
    dataset:
      "Operational SQL Server data extended with reproducible synthetic historical sales because the original demo database was too small for time-series training.",
    challenges: [
      "Keeping the operational Java app separate from the analytics layer.",
      "Designing a star schema from transactional order data.",
      "Using time-based features, lag values, and rolling means for forecasting.",
    ],
    learned:
      "How to connect OLTP systems to analytics and ML workflows without changing the original application code.",
    highlights: [
      "10-table SQL Server operational schema.",
      "SHA-256 password hashing and role-based admin/user access.",
      "18 months of reproducible historical sales simulation.",
      "14-day recursive forecasting workflow.",
    ],
    stack: ["Java", "SQL Server", "Python", "SQLite", "ETL", "XGBoost", "Streamlit"],
    github: "https://github.com/Saadawy-AI/Ikea_Shopping",
    demo: "https://saadawy-ai-ikea-shopping-dashboardapp-kpdswe.streamlit.app/",
  },
  {
    slug: "smart-city-real-time-pipeline",
    title: "Smart City Real-Time Pipeline",
    category: "Streaming Data Engineering",
    image: smartcity,
    problem:
      "Smart city sensor events need continuous ingestion, transformation, and storage without waiting for batch windows.",
    solution:
      "Simulated IoT producers, streamed 5 Kafka topics into Spark Structured Streaming, orchestrated services with Docker, and wrote curated Parquet outputs.",
    impact:
      "Created a distributed real-time architecture with checkpointing and scalable storage patterns.",
    architecture:
      "Python IoT simulation -> Kafka topics -> Spark Structured Streaming -> checkpointed Parquet storage.",
    flow: [
      "IoT Simulation",
      "Kafka Topics",
      "Spark Streaming",
      "Watermarking",
      "Checkpoints",
      "Parquet",
    ],
    dataset:
      "Simulated smart city events covering vehicle movement, GPS, traffic cameras, weather readings, and emergency alerts.",
    challenges: [
      "Processing five independent Kafka topics at the same time.",
      "Defining schemas for JSON streams before writing reliable outputs.",
      "Managing Docker services for Kafka, Zookeeper, Spark master, and workers.",
    ],
    learned:
      "How streaming platforms separate ingestion, processing, and storage in real-time data systems.",
    highlights: [
      "5 Kafka topics for city sensor data.",
      "Spark master with 2 active workers.",
      "2-minute watermarking and checkpointed writes.",
      "Use cases for traffic, weather, GPS, and emergency monitoring.",
    ],
    stack: ["Kafka", "Spark", "Docker", "Python", "Parquet", "Streaming"],
    github: "https://github.com/Saadawy-AI/SmartCity",
  },
  {
    slug: "road-collisions-prediction",
    title: "Road Collisions Prediction",
    category: "Machine Learning",
    image: road,
    problem:
      "Road collision severity is hard to estimate from messy, imbalanced real-world accident data.",
    solution:
      "Built a full ML pipeline with cleaning, EDA, feature engineering, CatBoost training, evaluation, and Streamlit deployment.",
    impact:
      "Achieved 92.6% accuracy and packaged the model into a usable prediction application.",
    architecture:
      "CSV dataset -> cleaning and EDA -> feature engineering -> CatBoost model -> evaluation -> Streamlit app.",
    flow: [
      "CSV Dataset",
      "Cleaning",
      "EDA",
      "Features",
      "CatBoost",
      "Streamlit",
    ],
    dataset:
      "Road collision dataset with dates, locations, road conditions, weather, vehicle details, and a 3-class severity target.",
    challenges: [
      "Handling a highly imbalanced target where slight collisions dominate.",
      "Engineering useful temporal and categorical features.",
      "Choosing metrics beyond accuracy, including weighted F1 and class-level performance.",
    ],
    learned:
      "Why CatBoost is useful for categorical-heavy data and how evaluation changes when classes are imbalanced.",
    highlights: [
      "92.6% accuracy with CatBoost.",
      "Weighted F1-score of 0.92.",
      "14,013 test samples in the classification report.",
      "Streamlit app with instant severity prediction.",
    ],
    stack: ["Python", "CatBoost", "Scikit-learn", "Pandas", "EDA", "Streamlit"],
    github: "https://github.com/Saadawy-AI/Road-Collisions-ML",
    demo: "https://road-collision-severity-app.streamlit.app/",
  },
  {
    slug: "spam-message-nlp-classifier",
    title: "Spam Message NLP Classifier",
    category: "NLP + Machine Learning",
    image: spam,
    problem:
      "Short text messages require reliable preprocessing and classification before they can be flagged as spam or legitimate.",
    solution:
      "Implemented cleaning, tokenization, stopword handling, TF-IDF features, Naive Bayes classification, and Streamlit inference.",
    impact:
      "Built a complete NLP pipeline that supports fast real-time message classification.",
    architecture:
      "Raw message -> text cleaning -> tokenization and lemmatization -> TF-IDF -> Multinomial Naive Bayes -> Streamlit app.",
    flow: [
      "Raw Text",
      "Cleaning",
      "Tokenization",
      "TF-IDF",
      "Naive Bayes",
      "Streamlit",
    ],
    dataset:
      "Text message classification data with spam and ham labels for supervised NLP training.",
    challenges: [
      "Normalizing short, noisy messages before vectorization.",
      "Balancing simplicity and reliability with TF-IDF and Naive Bayes.",
      "Packaging vectorizer and model artifacts for repeatable inference.",
    ],
    learned:
      "How classic NLP pipelines can still deliver practical, explainable classification for text applications.",
    highlights: [
      "End-to-end NLP preprocessing workflow.",
      "TF-IDF vectorization with serialized artifacts.",
      "Multinomial Naive Bayes inference.",
      "Interactive Streamlit prediction interface.",
    ],
    stack: ["Python", "NLTK", "TF-IDF", "Naive Bayes", "Scikit-learn", "Streamlit"],
    github: "https://github.com/Saadawy-AI/spam-classifier-streamlit",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export default projects;
