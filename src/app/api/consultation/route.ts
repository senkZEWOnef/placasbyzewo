import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // Log the lead for your records
    console.log('New consultation lead:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      municipality: formData.municipality,
      homeType: formData.homeType,
      electricBill: formData.electricBill,
      timeframe: formData.timeframe,
      hasRoof: formData.hasRoof,
      message: formData.message,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      referer: request.headers.get('referer')
    })
    
    // Here you would:
    // 1. Save to your database/CRM
    // 2. Send email to your friend's solar company
    // 3. Send confirmation email to the customer
    // 4. Track conversion for analytics
    
    // Example: Send email to solar installer partner
    /*
    await sendEmail({
      to: 'partner@solarcompany.com',
      subject: `Nueva consulta solar - ${formData.name}`,
      html: `
        <h2>Nueva Consulta Solar</h2>
        <p><strong>Nombre:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Teléfono:</strong> ${formData.phone}</p>
        <p><strong>Municipio:</strong> ${formData.municipality}</p>
        <p><strong>Tipo de propiedad:</strong> ${formData.homeType}</p>
        <p><strong>Factura eléctrica:</strong> ${formData.electricBill}</p>
        <p><strong>Cronograma:</strong> ${formData.timeframe}</p>
        <p><strong>Estado del techo:</strong> ${formData.hasRoof}</p>
        <p><strong>Comentarios:</strong> ${formData.message}</p>
      `
    })
    */
    
    // Example: Send confirmation email to customer
    /*
    await sendEmail({
      to: formData.email,
      subject: 'Consulta solar recibida - PlacasPR',
      html: `
        <h2>¡Gracias por tu interés en energía solar!</h2>
        <p>Hola ${formData.name},</p>
        <p>Hemos recibido tu solicitud de consulta gratuita. Nuestro socio instalador se pondrá en contacto contigo dentro de 24 horas.</p>
        <p>Mientras tanto, puedes:</p>
        <ul>
          <li>Leer nuestros artículos sobre energía solar</li>
          <li>Preparar las últimas 3 facturas eléctricas</li>
          <li>Pensar en preguntas específicas sobre tu proyecto</li>
        </ul>
        <p>¡Gracias por elegir PlacasPR!</p>
      `
    })
    */
    
    // Example: Save to Google Sheets (alternative to database)
    /*
    await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    */
    
    // Track conversion for analytics
    /*
    await fetch('https://your-analytics-service.com/conversions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'consultation_request',
        value: 50, // Lead value in dollars
        timestamp: new Date().toISOString(),
        data: formData
      })
    })
    */
    
    return NextResponse.json({ 
      success: true, 
      message: 'Consulta enviada exitosamente' 
    })
  } catch (error) {
    console.error('Error processing consultation:', error)
    return NextResponse.json(
      { error: 'Error procesando la consulta' }, 
      { status: 500 }
    )
  }
}