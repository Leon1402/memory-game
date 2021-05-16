import './Card.css'

export const Card = ({ item, openCard, index }) => {
    return (
        <div className={
            item.find
                ? 'card card_find'
                : 'card'
        }
        onClick={() => {
            (item.open || item.find) || openCard(index)
        }}>
            <span className={
                item.open
                    ? 'card__item card__item_active'
                    : 'card__item'
            }>
                {item.number || ''}
            </span>
        </div >
    )
}