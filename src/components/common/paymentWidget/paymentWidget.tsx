'use client';
import './paymentWidget.css';

export default function PaymentWidget() {
    return (
        <div>
            <form className="payform-tinkoff" name="payform-tinkoff" onSubmit={() => undefined}>
                <input className="payform-tinkoff-row" type="hidden" name="terminalkey" value="TinkoffBankTest"/>
                <input className="payform-tinkoff-row" type="hidden" name="frame" value="false"/>
                <input className="payform-tinkoff-row" type="hidden" name="language" value="ru"/>
                <input className="payform-tinkoff-row" type="text" placeholder="Сумма заказа" name="amount" required/>
                <input className="payform-tinkoff-row" type="hidden" placeholder="Номер заказа" name="order"/>
                <input className="payform-tinkoff-row" type="text" placeholder="Описание заказа" name="description"/>
                <input className="payform-tinkoff-row" type="text" placeholder="ФИО плательщика" name="name"/>
                <input className="payform-tinkoff-row" type="email" placeholder="E-mail" name="email"/>
                <input className="payform-tinkoff-row" type="tel" placeholder="Контактный телефон" name="phone"/>
                <input className="payform-tinkoff-row payform-tinkoff-btn" type="submit" value="Оплатить"/>
            </form>
        </div>
    );
}