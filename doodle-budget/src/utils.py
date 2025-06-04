import pandas as pd

def savings_updater(savings_counter, new_savings_input):
    savings_counter += new_savings_input
    return savings_counter

def expenses_updater(expenses_counter, new_expense_input):
    expenses_counter += new_expense_input
    return expenses_counter

def inflow_updater(inflow_counter, new_inflow_input):
    inflow_counter += new_inflow_input
    return inflow_counter

def outflow_updater(outflow_counter, new_outflow_input):
    outflow_counter += new_outflow_input
    return outflow_counter

def new_flow_updater(outflow, inflow):
    return (inflow - outflow)

def inv_updater(inv_counter, new_inv_input):
    inv_counter += new_inv_input
    return inv_counter

def weights_perc_calc(target_df):
    target_df['importance'] = target_df['type'] * target_df['urgency']
    target_df['weights'] = target_df['importance'] / target_df['importance'].sum()
    return target_df

def target_df_updater(target_df, date, target, description, type, urgency):
    new_df = pd.DataFrame({'date': [date], 'target': [target], 'description': [description], 'type': [type], 'urgency': [urgency]})
    updated_df = pd.concat([target_df, new_df],ignore_index=True)
    return updated_df

def transaction_df_updater(transaction_df, date, transaction_val, type, description, prop_saved = 0, amt_saved = 0):
    if prop_saved == 0 and amt_saved != 0:
        prop_saved = round(amt_saved / transaction_val,2)
    elif prop_saved != 0 and amt_saved == 0:
        amt_saved = round(prop_saved * transaction_val, 2)
    else:
        prop_saved = prop_saved
        amt_saved = amt_saved
    new_df = pd.DataFrame({'date': [date], 'val': [transaction_val], 'description': [description], 
                           'type': [type], 'prop_saved': [prop_saved], 'amt_saved': [amt_saved]})
    updated_df = pd.concat([transaction_df, new_df],ignore_index=True)
    return updated_df 

def inv_df_updater(inv_df, date, int_rate, inv_type, inv_val):
    new_df = pd.DataFrame({'date': [date], 'int_rate': [int_rate], 'inv_type': [inv_type], 'inv_val': [inv_val]})
    updated_df = pd.concat([inv_df, new_df], ignore_index=True)
    return updated_df

def perc_completed_target(savings_val, target_df, date_of_input, delete_savings = False, delete_target = False):
    if delete_savings == False and delete_target == False:
        target_df['val_remaining'] = target_df['target'] - target_df['weights'] * savings_val
        return target_df