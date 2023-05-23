const Currency = () => {
    return (
        <div className={'alert'}>
            <select id="currencySelect" style={{ backgroundColor: 'palegreen' }}>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;