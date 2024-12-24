function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Generate order ID and timestamp
    const orderId = "ORD-" + new Date().getTime();
    const timestamp = new Date().toLocaleString();
    
    var rowData = [
        orderId,                                    // Column A: Order ID
        timestamp,                                  // Column B: Timestamp
        e.parameter.name || "Not provided",         // Column C: Customer Name
        e.parameter.phone || "Not provided",        // Column D: Phone Number
        e.parameter.email || "Not provided",        // Column E: Email
        e.parameter.productName || "Not specified", // Column F: Product Name
        parseInt(e.parameter.count) || 0,           // Column G: Quantity
        parseFloat(e.parameter.price) || 0,         // Column H: Unit Price
        e.parameter.location || "Not specified",    // Column I: Location
        e.parameter.addressResult || "Not provided",// Column J: Address
        // Column K: Total Price (Calculated)
        (parseFloat(e.parameter.price) || 0) * (parseInt(e.parameter.count) || 0) + " DT"
    ];

    sheet.appendRow(rowData);
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}

function sendOrderConfirmationEmail(orderData) {
    const htmlTemplate = `
<div style="font-family: 'Amaranth', sans-serif; max-width: 600px; margin: 0 auto; background: #000000; color: #ffffff; padding: 20px; border: 2px solid #ffac33; border-radius: 8px;">
    <h2 style="color: #ffac33; text-align: center; margin-bottom: 20px;">Order Confirmation</h2>
    <p style="color: #ffffff;">Dear ${orderData.name},</p>
    
    <p style="color: #ffffff;">Thank you for your purchase! We're excited to confirm your order.</p>
    
    <div style="background-color: #111111; padding: 15px; border-radius: 5px; margin: 20px 0; border: 1px solid #ffac33;">
        <h3 style="color: #ffac33;">Order Details:</h3>
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr style="background-color: #ffac33;">
                    <th style="padding: 10px; text-align: left; color: #000000;">Item</th>
                    <th style="padding: 10px; text-align: center; color: #000000;">Quantity</th>
                    <th style="padding: 10px; text-align: right; color: #000000;">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr style="color: #ffffff;">
                    <td style="padding: 10px; border-top: 1px solid #ffac33;">${orderData.productName}</td>
                    <td style="padding: 10px; border-top: 1px solid #ffac33; text-align: center;">${orderData.count}</td>
                    <td style="padding: 10px; border-top: 1px solid #ffac33; text-align: right;">${orderData.price} DT</td>
                </tr>
                <tr style="background-color: #9c27b020; color: #ffffff;">
                    <td style="padding: 10px; border-top: 1px solid #ffac33;">🎁 Free Sticker</td>
                    <td style="padding: 10px; border-top: 1px solid #ffac33; text-align: center;">1</td>
                    <td style="padding: 10px; border-top: 1px solid #ffac33; text-align: right;">0.00 DT</td>
                </tr>
                <tr style="font-weight: bold; color: #ffac33;">
                    <td colspan="2" style="padding: 10px; border-top: 2px solid #ffac33;">Total</td>
                    <td style="padding: 10px; border-top: 2px solid #ffac33; text-align: right;">${parseFloat(orderData.price) * parseInt(orderData.count)} DT</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div style="background-color: #111111; padding: 15px; border-radius: 5px; margin: 20px 0; border: 1px solid #ffac33;">
        <h3 style="color: #ffac33;">Shipping Details:</h3>
        <p style="margin: 5px 0; color: #ffffff;">Address: ${orderData.addressResult}</p>
        <p style="margin: 5px 0; color: #ffffff;">Location: ${orderData.location}</p>
        <p style="margin: 5px 0; color: #ffffff;">Contact: ${orderData.phone}</p>
    </div>

    <p style="color: #9c27b0; font-weight: bold;">✨ Don't forget about your free sticker! ✨</p>
    
    <p style="color: #ffac33; font-size: 0.9em; text-align: center; margin-top: 30px;">
        If you have any questions, please contact us at support@example.com
    </p>
</div>
    `;

    GmailApp.sendEmail(
        orderData.email,
        "Order Confirmation - Thank You for Your Purchase! 🛍️",
        "Thank you for your purchase!", // Plain text alternative
        {
            htmlBody: htmlTemplate,
            name: "Your Store Name"
        }
    );
}




                // Original card template for reference
          // <div class="col-6 col-md-6 col-lg-4 mb-3 product">
          //     <div class="card h-100" style="background: ${COLORS.DARK}; border: 2px solid ${COLORS.PRIMARY};">
          //         <div class="card-img-wrapper" style="position: relative; overflow: hidden;">
          //             <img src="${product.image}" class="card-img-top" alt="product img" 
          //                 onclick="description('${product.intro}', '${product.image}', '${product.name}', '${product.price}')"
          //                 style="transition: transform 0.3s ease; height: 140px; object-fit: cover;">
          //             <div class="card-img-overlay" style="background: linear-gradient(180deg, transparent 60%, ${COLORS.DARK}90);"></div>
          //         </div>
          //         <div class="card-body text-white p-2">
          //             <h6 style="display:none">${product.category}</h6>
          //             <h5 class="card-title h6" style="color: ${COLORS.PRIMARY}">${product.name}</h5>
          //             <hr style="border-color: ${COLORS.PRIMARY}; margin: 0.5rem 0;">
          //             <p class="card-text small">Price: <span style="color: ${COLORS.PRIMARY}">${product.price}</span> <small><b>دت</b></small></p>
          //             <button class="btn btn-sm w-100" 
          //                 style="background: ${COLORS.PRIMARY}; color: ${COLORS.DARK}; font-weight: bold;"
          //                 onmouseover="this.style.background='${COLORS.SECONDARY}'"
          //                 onmouseout="this.style.background='${COLORS.PRIMARY}'"
          //                 onclick="confirmAddToCart('${product.name}', ${product.price}, '${product.intro}', '${product.image}')">
          //                 Add to Cart
          //             </button>
          //         </div>
          //     </div>
          // </div>