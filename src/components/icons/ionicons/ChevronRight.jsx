import styles from './css/ionicons.module.css'

const ChevronRight = ({ className }) => {
    return (
        <ion-icon
            className={`${styles.chevronRight} ${className}`}
            name={'chevron-forward-outline'}
        >
        </ion-icon>
    )
}

export default ChevronRight