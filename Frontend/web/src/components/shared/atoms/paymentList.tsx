import React from "react";
import amexPayment from '../../../assets/payment/medios_de_pago_amex.svg'
import bancolombiaPayment from '../../../assets/payment/medios_de_pago_bancolombia.svg'
import codensaPayment from '../../../assets/payment/medios_de_pago_codensa.svg'
import contraentregaPayment from '../../../assets/payment/medios_de_pago_contraentrega.svg'
import credifinPayment from '../../../assets/payment/medios_de_pago_credifin.svg'
import creditoPayment from '../../../assets/payment/medios_de_pago_credito.svg'
import debitoPayment from '../../../assets/payment/medios_de_pago_debito.svg'
import dinersPayment from '../../../assets/payment/medios_de_pago_diners.svg'
import efectyPayment from '../../../assets/payment/medios_de_pago_efecty.svg'
import masterCardPayment from '../../../assets/payment/medios_de_pago_master_card.svg'
import psePayment from '../../../assets/payment/medios_de_pago_pse.svg'
import visaPayment from '../../../assets/payment/medios_de_pago_visa.svg'

const PaymenList : React.FC = () => {
    return (
        <div className="flex flex-col">
            <h6 className="underline font-bold text-black mb-2">MEDIOS DE PAGO</h6>
            <div className="grid grid-cols-3 gap-4">
                <img className="w-16" src={amexPayment} alt="Logotipo amex" />
                <img className="w-16" src={bancolombiaPayment} alt="Logotipo bancolombia" />
                <img className="w-16" src={codensaPayment} alt="Logotipo codensa" />
                <img className="w-16" src={contraentregaPayment} alt="Logotipo contraentrega" />
                <img className="w-16" src={credifinPayment} alt="Logotipo credifin" />
                <img className="w-16" src={creditoPayment} alt="Logotipo credito" />
                <img className="w-16" src={debitoPayment} alt="Logotipo debito" />
                <img className="w-16" src={dinersPayment} alt="Logotipo diners" />
                <img className="w-16" src={efectyPayment} alt="Logotipo efecty" />
                <img className="w-16" src={masterCardPayment} alt="Logotipo masterCard" />
                <img className="w-16" src={psePayment} alt="Logotipo pse" />
                <img className="w-16" src={visaPayment} alt="Logotipo visa" />
            </div>
        </div>

    );
};

export default PaymenList