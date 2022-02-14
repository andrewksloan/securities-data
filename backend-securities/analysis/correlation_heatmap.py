import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import sys

sys.path.append('../')
from lib import JOINED_SP500_PATH

# Correlation table
def correlation(list):
    """
    Creates a correlation table from a given list of SP500 companies.
    :param list: List containing ticker symbols as strings
    :return: correlation table with heatmap
    """
    with open(JOINED_SP500_PATH) as f:
        main_df = pd.read_csv(f)
        # print(main_df)
        df = pd.DataFrame()

        for a in range(len(list)):
            array = main_df[list[a]].values
            df['{}'.format(list[a])] = array

        # corr_table = df.corr().to_dict()
        corr_table = df.corr()
        

        print(corr_table)
        plt.show()


correlation(['AAPL', 'MSFT', 'GE', 'IBM', 'BA'])