import styles from './TransactionHistory.module.css'
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem'

export default function TransactionHistory({ TransactionHistory }) {
    return (
        <table className={styles.transactionTable}>
            <thead className={styles.transactionMainRow}>
                <tr>
                    <th className={styles.transactionTableTitle}>Type</th>
                    <th className={styles.transactionTableTitle}>Amount</th>
                    <th className={styles.transactionTableTitle}>Currency</th>
                </tr>
            </thead>
            <tbody> 
                {TransactionHistory.map((transaction) => <TransactionHistoryItem key={transaction.id} data={transaction} />)}
            </tbody>
        </table>
    )
}