export default function Checkout() {
    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            {/* Billing Details */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Billing Details</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="City"
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Zip Code"
                        className="w-full border p-2 rounded"
                    />
                </form>
            </div>

            {/* Payment Section */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
                <select className="w-full border p-2 rounded">
                    <option>Credit Card</option>
                    <option>PayPal</option>
                    <option>Cash on Delivery</option>
                </select>
            </div>

            {/* Place Order Button */}
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Place Order
            </button>
        </div>
    );
}
