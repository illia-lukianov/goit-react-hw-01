import styles from './TransactionHistoryItem.module.css'

export default function TransactionHistoryItem({ data: { id, type, amount, currency } }) {
    return (
    <tr key={id} >
        <td className={styles.tableElement}>{type}</td>
        <td className={styles.tableElement}>{amount}</td>
        <td className={styles.tableElement}>{currency}</td>
    </tr>
    )
}