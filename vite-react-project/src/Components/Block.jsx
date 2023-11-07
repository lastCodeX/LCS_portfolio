const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GPB']

const Block = ()=>{
    return (
        <div className="block">
            <ul className="currencies">
                {
                    defaultCurrencies.map((cur)=>{
                        
                    })
                }
            </ul>

        </div>

    )
}

export default Block