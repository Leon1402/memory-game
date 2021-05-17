import './Card.css'

export const Card = ({ item, openCard, index }) => {
    return (
        <div className={
            item.open
            ? 'card card_open'
            : item.find
                ? 'card card_find'
                : 'card'
        }
            onClick={() => {
                (item.open || item.find) || openCard(index)
            }}>
            <div className="card__container">
                <span className={
                    item.open
                        ? 'card__back card__item_active'
                        : 'card__back'
                }>
                    {item.number || ''}
                </span>
                <span className={
                    item.open
                        ? 'card__front card__item_active'
                        : 'card__front'
                }></span>
            </div>

        </div >
    )
}