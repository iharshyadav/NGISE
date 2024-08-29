import React from 'react'

// const menuItems = [
//   {
//     name: 'Home',
//     href: '#',
//   },
//   {
//     name: 'About',
//     href: '#',
//   },
//   {
//     name: 'Contact',
//     href: '#',
//   },
// ]

// const locations = [
//   {
//     title: 'Bengaluru office',
//     timings: 'Mon-Sat 9am to 5pm.',
//     address: '100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN',
//   },
//   {
//     title: 'Head office',
//     timings: 'Mon-Sat 9am to 5pm.',
//     address: '12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN',
//   },
//   {
//     title: 'Karnataka office',
//     timings: 'Mon-Sat 9am to 5pm.',
//     address: '42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN',
//   },
// ]

const Contact = () => {


  // const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen)
  // }
  
  return (
    <div>

    <div className="mx-auto max-w-7xl px-4">
      <div className="mx-auto max-w-7xl py-12 md:py-24">
        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
          {/* contact from */}
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ajay Kumar Garg Engineering College
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              27th KM Milestone, Delhi - Meerut Expy,<br />
              Ghaziabad, Uttar Pradesh 201015
            </p>
            <p className="text-lg text-gray-700">
           Call at 919868450322 (Dr. Anupama Sharma) 
          </p>
          <p className="text-lg text-gray-700 mb-2">
            Mail to ngise@akgec.ac.in
          </p>
            <p className="text-md text-gray-600">
              For more information, visit our website or contact us at info@akgec.ac.in.
            </p>
          </div>
          <div className="formMap">
              <iframe
              className=' hidden max-h-full w-full rounded-lg object-cover lg:block sm:w-[40vw] sm:h-[32vw] h-44'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.467007802247!2d77.49981541461779!3d28.67567358240077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf30885b1e2a5%3A0x9983675e24c6638b!2sAKGEC%3A%20Ajay%20Kumar%20Garg%20Engineering%20College%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1676826055930!5m2!1sen!2sin"
                width=""
                height=""
                title="location"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact





