import logging
import logging.config
from datetime import datetime
from dotenv import find_dotenv, load_dotenv
import os

env_file = find_dotenv()
load_dotenv()

CONFIG_DIR = "../config"
LOG_DIR = "logs"

def setup_logging():
    """Load logging configuration"""
    log_configs = {"development": "logging.dev.ini", "prod": "logging.prod.ini"}
    config = log_configs.get(os.environ["FLASK_ENV"], "logging.dev.ini")
    config_path = "/".join([CONFIG_DIR, config])
    config_path = "config/logging.dev.ini"
    print(os.getcwd())
    print(config_path)
    timestamp = datetime.now().strftime("%Y:%m:%d-%H:%M:%S")

    logging.config.fileConfig(
            config_path,
            disable_existing_loggers=False,
            # defaults={"logfilename": "test.log"}
            defaults={"logfilename": f"{LOG_DIR}/{timestamp}.log"},)            
            

setup_logging()

logger = logging.getLogger(__name__)

