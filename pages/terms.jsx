import React, { useState } from 'react';

const Terms = () => {
  // State to toggle accordions
  const [openSection, setOpenSection] = useState(null);

  const toggleAccordion = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const isOpen = (index) => openSection === index;

  return (
    <div className="terms text-white">
      {/* Center the h1 title */}
      <h1 className="text-center text-4xl font-extrabold my-8 py-4 bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 text-transparent bg-clip-text">
  TERMS OF USE
</h1>


      {/* Accordion for "TERMS OF USE" */}
      <div onClick={() => toggleAccordion(1)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">TERMS OF USE<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>        
        {openSection === 1&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2">
            <p>
              The Services (defined below) are provided by Bright-Mind AI (together with its subsidiaries,
              and international affiliates, hereinafter "Bright-Mind AI," "us," "we," or "our").
            </p>
            <p>
              These Terms of Use ("Terms") govern your use of Bright-Mind AI's website, apps, the Olympus Learning Management System,
              and other products and services ("Services") such as WhatsApp groups, Facebook groups, Instagram pages, Facebook pages,
              email/SMS/phone communications, and other social media forums hosted by Bright-Mind AI, which shall be deemed to be part of
              the “Services” by reference.
            </p><p>
            These Terms, including any additional terms and conditions and the policies referenced in these Terms, represent a binding contract between you and us with regard to the Services. You indicate your agreement to these Terms by clicking or tapping on a button indicating your acceptance of these Terms, by executing a document that references them, or by using the Services. Therefore, please read these Terms carefully, and contact us at info@bright-mind.in if you have any questions. Furthermore, these Terms of Service apply to all users of the Services, including without limitation users who are recruiters, colleges/universities, browsers, vendors, customers, merchants, and/ or contributors of content.
            If you do not agree to all the terms and conditions of these Terms, then you may not access the website or use any Services.
            </p><p>
            Any new features or tools which are added to the Services shall also be subject to these Terms. You can review the most current version of the Terms at any time on this page. We reserve the right to update, change or replace any part of these Terms at any time. It is your responsibility to check this page periodically for changes. Your continued use of or access to the Services following the posting of any changes constitutes acceptance of those changes.
            We reserve the right to refuse Service to anyone for any reason at any time.
            </p>
          </div>
        )}
      </div>

      <div onClick={() => toggleAccordion(2)} style={{ cursor: 'pointer' }}>
              <h2 className="flex justify-between items-center text-xl bg-gray-900">TERMS OF SERVICES<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
              {openSection === 2 && (
                <div className="mb-4">
                <p>
                Registration and Information. You need not register with us to simply visit and view our website, but to access and avail most of our Services being offered, you will need to create a password-protected account (“Account”).
                </p><p>
                During the registration process you are also required to submit your personal information, which may include information relating to your name, age, gender, mobile device and location, among other things. You agree that the information provided by you upon registration and at all times thereafter will be true, accurate, current and complete. You agree to maintain and update this information to keep it true, accurate and complete at all times while using the Services.
                </p><p>
                By sharing your email address & phone number with us, you consent to be contacted by us via phone calls, SMS notifications, mobile applications, email, and/or any other electronic mode of communication in case of upcoming events, program updates and deadline.
                </p><p>
                You are solely responsible for safeguarding your password ("Password") at all times and shall keep your Password secure at all times. You shall be solely responsible for all activity that occurs on your Account and you shall notify us immediately of any breach of security or any unauthorized use of your Account. Similarly, you shall never use another's Account without our permission. You agree that you will not misrepresent yourself or represent yourself as another user of the Services.
                </p><p>
                You hereby expressly acknowledge and agree that you yourself will be liable for your losses, damages and expenses (whether direct or indirect) caused by an unauthorized use of your Account. Notwithstanding the foregoing, you may be liable for our losses or others due to such unauthorized use.Bright-Mind AI reserves the right to use your social logins to authenticate your identity and/or information provided by you. Bright-Mind AI reserves the right to use your social logins to get information to pre-fill your application forms. Bright-Mind AI reserves the right to store any information received from such social login and use it for any future job applications on behalf of you to whom such information relates to. Bright-Mind AI shall not be responsible for any delays in the submission of any information provided by you.
                </p>
                </div>
              )}
            </div>
      <div onClick={() => toggleAccordion(3)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">Bright-Mind AI’S INTELLECTUAL PROPERTY RIGHTS<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 3&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2">
            <p>
          The Services, Programs (defined below) and related services are owned and operated by Bright-Mind AI and its licensors. Except as otherwise provided herein, all content or other material available on our platform or through the Programs, including but not limited to online/live lectures, speeches, video lessons, quizzes, presentation materials, homework assignments, programming assignments, programs, code, and other images, text, layouts, arrangements, displays, illustrations, documents, materials, audio and video clips, HTML and files (collectively “Bright-Mind AI Content”), are the property of Bright-Mind AI and/or its affiliates or licensors, and are protected by copyright, patent and/or other proprietary intellectual property rights under Indian and foreign laws. All software used in the Services, including our Learning Management System, website and application(s), is the property of Bright-Mind AI and is protected by Indian and international copyright laws.
          </p><p>
          Bright-Mind AI logos, trademarks and service marks that may appear in the Services and in the Program (“Bright-Mind AI Marks”) are the property of Bright-Mind AI and are protected under Indian and foreign laws. All other trademarks, service marks and logos used in the Services, online courses or Programs, with or without attribution, are the trademarks, service marks or logos of their respective owners. In addition, elements of the Services are protected by trade dress and other Indian and international intellectual property laws and may not be copied, reproduced, downloaded or distributed in any way in whole or in part without the express written consent of Bright-Mind AI.
          </p><p>
          As a condition of accessing the Services and/or using the Programs, you agree not to (a) reproduce, duplicate, copy, sell, resell or exploit for any commercial purpose any Bright-Mind AI Content or any portion of it thereof, other than as expressly allowed under these Terms; and (b) use the Bright-Mind AI Marks or the name, trademarks, service marks, or other materials of any Educational Partner in connection with, or to transmit, any unsolicited communications or emails or for any other unauthorised purpose.
          </p><p>
          Please verify all content prior to use. In the event you come across any content that is incorrect, infringing, offensive, indecent or objectionable, please notify us immediately at the address mentioned at the bottom of this page.
          </p><p>
          Additionally, from time to time, Bright-Mind AI (or its third-party service providers, on behalf of Bright-Mind AI) may request users to review Bright-Mind AI Content or beta-test the Services. The works derived from such activity shall remain the sole and exclusive property of Bright-Mind AI or its third-party service providers, as applicable.
          </p>
          </div>
              )}
            </div>
      <div onClick={() => toggleAccordion(4)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">LIMITED LICENSE<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 4&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2">
            <ul>
          <li>The Services are licensed, not sold. In consideration for your agreement to these Terms, Bright-Mind AI grants you a personal, non-exclusive, non-transferable, revocable license to access and use the Services and Programs, solely in accordance with the Terms and only for the duration for which you avail our Services,. You may download or copy the portions of the Bright-Mind AI Content available on the Services for your own non-commercial and personal use only, provided you maintain all copyright and other notices contained in such Bright-Mind AI Content. You may not copy, sell, resell, reproduce, publish, modify, transfer, retransmit, distribute, commercially exploit or create derivative works of Services, Program, Bright-Mind AI Content. Notwithstanding the foregoing, certain reference documents, digital textbooks and articles may be made available to you with the permission of third parties, and use of that information is subject to certain rules and conditions, and you agree to abide by all such rules and conditions.</li>
          <li>Without limiting the generality of the terms above, the following are types of uses that Bright-Mind AI expressly defines as falling outside of the definition of "non-commercial and personal use":</li>
          <ul>
          <li>the sale or rental of (i) any part of the Bright-Mind AI Content, (ii) any derivative works based at least in part on the Bright-Mind AI Content, or (iii) any collective work that includes any part of the Bright-Mind AI Content;</li>
          <li>the sale of access or a link to any part of the Bright-Mind AI Content;</li>
          <li>providing training, support, or editorial services that use or reference the Bright-Mind AI Content in exchange for a fee;</li>
          <li>the use of Bright-Mind AI Content by a college, university, school, or other educational institution for instruction where tuition is charged;</li>
          <li>the use of Bright-Mind AI Content by a for-profit corporation or non-profit entity for internal professional development or training; and</li>
          <li>the use of Bright-Mind AI Content for display / upload / making available at a place that is accessible to the general public in any manner, including but not limited to any social media sites, video download sites, and torrents.</li>
          </ul>
          </ul>
          </div>
              )}
            </div>
      <div onClick={() => toggleAccordion(5)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">USER CONTENT<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 5&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2">
          The Services enable you to share your content, such as homework, quizzes, exams, projects, and other assignments you submit, posts you make in the forums, and the like ("User Content"), with Bright-Mind AI, instructors, and/or other users. You retain all intellectual property rights in, and are responsible for, the User Content you share. We are not responsible for any actions you take with respect to the User Content, including sharing it publicly. Further, you are not permitted to use another user’s User Content without such user’s express consent.
          <p>
          HOW Bright-Mind AI AND OTHERS MAY USE USER CONTENT
          To the extent that you provide User Content, you grant Bright-Mind AI a fully-transferable, royalty-free, perpetual, sub-licensable, non-exclusive, worldwide license to copy, distribute, modify, create derivative works based on, publicly perform, publicly display, and otherwise use the User Content. This license includes granting Bright-Mind AI the right to authorize institutions offering courses as part of the Services, to use User Content with their registered students and on-campus learners independent of the Services. To clarify, this license continues even after you stop using the Services. Nothing in these Terms shall restrict other legal rights Bright-Mind AI may have to User Content. We reserve the right to remove or modify User Content for any reason, including User Content that we believe violates these Terms. To the extent that instructors and/ or other users use User Content in a manner not authorised by you or by Bright-Mind AI, Great Leaning shall hold no responsibility and shall bear no liability for any loss, damage or expenses suffered or incurred by you owing to misuse or User Content or breach of your intellectual property rights over the User Content.
          </p><p>
          We may, but have no obligation to, monitor, edit or remove User Content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms.
          You agree that the User Content will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that User Content will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.
          </p>
          </div>
              )}
            </div>
<div onClick={() => toggleAccordion(6)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">Hands-On PROJECT<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 6&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2">
<p>
During your learning journey with us, Bright-Mind AI may conduct Hands-On Projects as a part of your learning curriculum to enable you to address practical problems relevant to your Program ("Problem"). Such Problems may either be provided by Bright-Mind AI or you may also propose certain problems from your end for you to work upon. You will be free to deploy Bright-Mind AI's resources and guidance from Bright-Mind AI's mentors and faculty members to resolve the problem ("Solution").
</p><p>
Accordingly, notwithstanding anything stated in the aforementioned sections of 'User Content' and 'How Bright-Mind AI and Others May Use User Content', following terms and conditions shall be applicable to the Capstone Projects:
</p><p>
If the Problem is provided by Bright-Mind AI, then Bright-Mind AI shall exclusively retain all the intellectual property rights to such Problem for perpetuity. Furthermore, Bright-Mind AI shall also own all the intellectual property rights to the Solution of such Problem devised by you and shall have the right to otherwise use the Solution in any manner as Bright-Mind AI may deem fit. You shall have the right to exhibit the Problem and the Solution to demonstrate your skills for career growth and progression, however, you shall not exploit the Problem and/or the Solution for any commercial purpose, whatsoever.
If the Problem is open source or is procured from an unidentifiable source, then unless expressly precluded, you and Bright-Mind AI shall jointly own all the intellectual property rights in the Problem and the Solution. Accordingly, Bright-Mind AI shall have a fully-transferable, royalty-free, perpetual, sub-licensable, worldwide right to copy, distribute, modify, create derivative works based on, publicly perform, publicly display, and otherwise use the Problem and the Solution. If you wish to assign / license or otherwise utilise any of your intellectual property rights to the Solution, you shall give a prior written notice to Bright-Mind AI in this regard.
If the Problem is procured by you and/or from any third party source, you shall disclose the source of the Problem to Bright-Mind AI. Bright-Mind AI shall have a right to list the Problem in your personal e-portfolio hosted on its website and retain it as part of its academic records. Furthermore, unless expressly precluded, the intellectual property rights in the Solution to the Problem shall be jointly owned by you and Bright-Mind AI. Accordingly, the rights of Bright-Mind AI on the Problem and the Solution, as mentioned in point 2 of this Section above, shall respectively apply to the Solution for such Problems.
</p>
</div>
              )}
            </div>
<div onClick={() => toggleAccordion(7)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">FEEDBACK<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 7&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
We welcome your suggestions, ideas, comments, and other feedback regarding the Services ("Feedback"). By submitting any Feedback, you grant us the right to edit, copy, publish, distribute, translate or otherwise use the Feedback without any restriction or any compensation to you. By accepting your Feedback, Bright-Mind AI does not waive any rights to use similar or related Feedback previously known to Bright-Mind AI, developed by its employees or contractors, or obtained from other sources.
</p><p>
We reserve the right to examine and analyse any non-personal information provided by you on the website including the Feedback. Any reports or compilations generated by us based on your information (“Derivative Reports”) shall belong exclusively to Bright-Mind AI and Bright-Mind AI reserves the right to use such Derivative Reports for internal purposes or to improve the Services. The Derivative Reports shall, at the option of Bright-Mind AI, be shared with its affiliates and its advisors.
</p>
</div>
              )}
            </div>
<div onClick={() => toggleAccordion(8)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">SECURITY<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 8&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
We take data security and privacy very seriously at Bright-Mind AI. We are proud to share that we are ISO 27001:2013 certified - the highest international standard for Information Security Management System (ISMS), demonstrating our commitment to maintaining the highest level of information security, risk management, and data privacy. While we work to protect the security of your Account and related information, Bright-Mind AI cannot guarantee that unauthorized third parties will not be able to defeat our security measures. Please notify us immediately of any compromise or unauthorized use of your Account.
</p>
</div>
              )}
            </div>
<div onClick={() => toggleAccordion(9)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">THIRD PARTY CONTENT<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 9&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
Through the Services, you will have the ability to access and/or use content provided by instructors of Programs offered as part of the Services, other users, and/or other third parties and links to websites and services maintained by third parties. Bright-Mind AI cannot guarantee that such third party content, in the Services or elsewhere, will be free of material you may find objectionable or otherwise inappropriate or of malware or other contaminants that may harm your computer, mobile device, or any files therein. Bright-Mind AI disclaims any responsibility or liability related to your access or use of such third party content. Any use by you of third party content is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).
</p><p>
It is clarified that Bright-Mind AI does not have a principal-agent or employer-employee relationship with any instructor, user or third party and shall not have bear any liability or responsibility on behalf of such persons / entities.
</p>
</div>
              )}
            </div>
<div onClick={() => toggleAccordion(10)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">EDUCATIONAL PARTNERS AND ACCREDITATION<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 10&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        Bright-Mind AI is NOT a university, but an education service provider, offering programs (“Program(s)”) in consultation with Indian and International universities, educational institutions, governmental authorities, NGOs, corporates, etc. (each an “Educational Partner”).
        Bright-Mind AI may offer a credential or other acknowledgement for participants who have satisfactorily demonstrated mastery of the Program material.
        Subject to these Terms and upon the successful completion of the Program as per Bright-Mind AI and/or its Educational Partner’s requirements, you will be awarded the relevant credentials. Bright-Mind AI may choose not to offer any credential or other acknowledgement for some Programs. Bright-Mind AI may decide at its sole discretion whether to provide a record concerning a participant’s performance in a Program. The format of any credential or other acknowledgement, and of any performance, provided by Bright-Mind AI relating to Programs will be determined by Bright-Mind AI and/or the Educational Partner at its sole discretion and may vary from Program to Program.
        </p><p>
        You will be awarded a certificate of successful completion of a Program (“Program Certificate”) upon fulfilling the criteria and requirements of Bright-Mind AI and/or its Educational Partners. You acknowledge that any such Program Certificate awarded may or may not include academic credits. You are advised to connect with our Program Office for more details in this regards.
        </p><p>
        You acknowledge and agree that any Program affiliated with an Educational Partner may be subject to the terms, policies and procedures of the applicable Educational Partner in addition to Bright-Mind AI’s Terms. Without limiting the foregoing, if you are a student registered or enrolled at, or are otherwise attending, an Educational Partner and are taking a Program for credit or certification through that Educational Partner, you acknowledge and agree that (a) the Educational Partner may have its own terms, policies or procedures regarding your eligibility to participate in the Program, your participation in the Program, the requirements or prerequisites for receiving credit or certification for the Program, and/or your educational or student records as they may relate to your participation and performance in the Program, and (b) your educational or student records are maintained by the Educational Partner, including for purposes of assigning credit or certification, and not Bright-Mind AI.
        </p>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(11)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">EDUCATION RESEARCH<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 11&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        Bright-Mind AI is committed to advancing the science of learning and teaching, and records of your participation in courses may be used for education research. Research findings will typically be reported at the aggregate level. Your personal identity will not be publicly disclosed in any research findings without your express consent.
        </p>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(12)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">PAID SERVICES<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 12&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        Bright-Mind AI offers paid Services for a fee. Unless otherwise stated, all fees are quoted in Indian Rupees. You are responsible for paying all fees and applicable taxes in a timely manner with a payment mechanism associated with the applicable paid Services. If your payment method fails or your Account is past due, we may collect fees using other collection mechanisms. Fees may vary based on your location and other factors, and Bright-Mind AI reserves the right to change any fees at any time at its sole discretion. Any change, update, or modification will be effective immediately upon posting through the relevant Services.
        </p>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(13)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">MODIFYING AND TERMINATING OUR SERVICES<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 13&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        We are constantly changing and improving our Services. We may add or remove functions, features, or requirements, and we may suspend or stop a Service altogether. Accordingly, Bright-Mind AI may terminate your use of any Service for any reason. If your use of a paid Service is terminated, a refund may be available as assessed on a per case basis solely at the discretion of Bright-Mind AI. Furthermore, each of our program (“Program”) may have a separate set of terms dealing with payments, cancellations, refunds and such related matters. Bright-Mind AI and its directors, instructors, its contributors, sponsors, and other business partners, and their employees, officers, staff, contractors, and other agents (the "Bright-Mind AI Parties") shall not have any liability to you for any such action. You can stop using our Services at any time.
        </p><p>
        We may also terminate your access to our Services if it comes to our knowledge that you have been involved in the dissemination of any information, whether through written, or oral means, that may contribute to the spread of misinformation, inaccuracies, or deceptive content about the products and services, or violated any of these Terms, our Privacy Policy, any other applicable policies or agreements between us, or any applicable laws. In this regard, we may further take any such necessary action, including legal recourse and removal of any non-compliant information shared by you.
        You shall be exclusively responsible for obtaining and maintaining any equipment or ancillary services needed to connect to, access, receive or use the Services, including, without limitation, hardware devices, software, and other internet, wireless, broadband, phone and/or other mobile communication device connection services. You shall be exclusively responsible for ensuring that such equipment or ancillary services are compatible with the Services, and you shall be responsible for all charges incurred in connection with the use of the Services and Program in connection with all such equipment and ancillary services.
        </p>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(14)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">PAYMENT TERMS AND REFUND POLICY<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 14&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        Unless otherwise expressly agreed in writing by Bright-Mind AI, full payment of Program fees is mandatory at the time of registration for participation in a Program. Any refund of fees, if applicable, shall be processed in accordance with the terms and conditions of refund of the respective Program specified in the offer letter and/or our website.
        </p><p>
        It is the sole responsibility of the user enrolling into a Program to check the accuracy of, and evaluate the suitability and relevance of, the Program elected. The enrolment into a Program is non-transferable.
        </p><p>
        To make payment for any Program or to purchase any Services, you must have internet access and a current valid accepted payment method, as indicated during sign-up and/or in your Program terms ("Payment Method"). Bright-Mind AI does not store any of your credit card information or such other information restricted by the Reserve Bank of India (RBI) for processing payment and has partnered with payment gateways for the payment towards the Services. By using a third-party payment provider, you shall abide by the terms of such a payment provider, including any collection/facilitation charges levied by such third-party. In case Bright-Mind AI’s third-party payment provider stores any such information, Bright-Mind AI will not be responsible for such storage, and it will be solely at your discretion to allow the third party to store such information. Any loss of such information or any loss incurred by you due to the usage of such information will be solely a loss incurred by you, and Bright-Mind AI is in no way liable for any such losses and is neither responsible to reimburse / make good such losses in any manner whatsoever.
        </p><p>
        Failure to pay the applicable Program fee as per the Program terms and conditions may result in withdrawal of your access to a Program. Depending on from where you transact with us, the type of payment method used and where your payment was issued, your transaction with us may be subject to foreign exchange fees, exchange rates and other related charges.
        </p><p>
        In order to provide you assistance to pay the Program fees, we may connect you with a few Banking and Financial Institutions. Your engagement with such institutes shall be voluntary. Bright-Mind AI is neither an agent, nor a representative of any of such institutes.
        </p><p>
        Such institutes may provide you their services as per their terms and conditions. Their terms and conditions shall govern your relationship with such institutes. In no event shall Bright-Mind AI be deemed to be a part of, or responsible for, such relationship. Furthermore, Bright-Mind AI shall not be responsible and/or liable for and/on behalf of you, or such third party institutes.
        </p><p>
        Bright-Mind AI may not support all payment methods, currencies or locations for payment.
        If you chose to cancel your enrolment, please connect with our program office in this regard.
        Additionally, upon payment of the Program fees – in part or whole, depending on the Program – Bright-Mind AI shall deliver the terms of use of the Program and grant you access to the Program.
        </p><p>
        Owing to certain exceptional circumstances, if Bright-Mind AI has granted you access to a Program pending payment, and Bright-Mind AI does not receive payments within the stipulated time periods, Bright-Mind AI may, at its own discretion, withdraw your access to the Program without giving any prior notice.
        </p>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(15)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">DISCLAIMERS<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 15&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        The services and all included content are provided on an "As is" basis without warranty of any kind, whether express or implied. the Bright-Mind AI parties specifically disclaim any and all warranties and conditions of merchantability, fitness for a particular purpose, and non-infringement, and any warranties arising out of course of dealing or usage of trade, whether express or implied. The Bright-Mind AI parties further disclaim any and all liability related to your access or use of the services or any related content. You acknowledge and agree that any access to or use of the services or such content is at your own risk.
        </p><p>
        This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.
        </p>
        </div>
              )}
            </div>
      <div onClick={() => toggleAccordion(16)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">LIMITATION OF LIABILITY<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 16&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        To the maximum extent permitted by law, the Bright-Mind AI parties shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, lost business opportunities, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from: (a) your access to or use of or inability to access or use the services; (b) any conduct or content of any party other than the applicable Bright-Mind AI party, including without limitation, any defamatory, offensive, or illegal conduct; (c) unauthorized access, use, or alteration of your content or information; (d) these terms; or (e) act, omission or negligence to which you contributed. In no event shall Bright-Mind AI's aggregate liability for all claims related to the services exceed one thousand Indian Rupees (1000 INR).
        </p><p>
        You acknowledge and agree that the disclaimers and the limitations of liability set forth in these terms of use reflect a reasonable and fair allocation of risk between you and the Bright-Mind AI parties, and that these limitations are an essential basis to Bright-Mind AI's ability to make the services available to you on an economically feasible basis.
        </p><p>
        You agree that any cause of action related to the services must commence within one (1) year after the cause of action accrues. Otherwise, such cause of action is permanently barred.
        </p><p>
        Furthermore, Bright-Mind AI shall not be responsible for non-availability or access to the website due to any technical reason including internet speeds or downtime, server downtime, failure of server to respond, virus, bugs, Trojan virus or other malware, whether known or unknown as of date, incompatibility of software or hardware or for any reason whatsoever.
        </p><p>
        Bright-Mind AI does not make any express or implied representations or warranties or any other obligations other than as specifically set out in the Terms and the Privacy Policy.
        </p>
        </div>
              )}
            </div>
      <div onClick={() => toggleAccordion(17)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">INDEMNIFICATION<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 17&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        You agree to indemnify, defend, and hold harmless the Bright-Mind AI Parties from any and all claims, liabilities, expenses, and damages, including reasonable attorneys' fees and costs, made by any third party related to: (a) your use or attempted use of the Services in violation of these Terms; (b) your violation of any law or rights of any third party; or (c) User Content, including without limitation any claim of infringement or misappropriation of intellectual property or other proprietary rights.
        </p>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(18)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">ERRORS, INACCURACIES AND OMISSIONS<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 18&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to Service descriptions, pricing, promotions, offers etc. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).
        </p><p>
        We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.
        </p>
        </div>
                      )}
                    </div>
        <div onClick={() => toggleAccordion(19)} style={{ cursor: 'pointer' }}>
                <h2 className="flex justify-between items-center text-xl bg-gray-900">GOVERNING LAW AND JURISDICTION<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
                {openSection === 19 && (
                  <div><p>
        The Services are managed by Bright-Mind AI. You agree that any dispute related to these Terms will be governed by the Indian laws, excluding its conflicts of law provisions. You further consent to the personal jurisdiction of and exclusive venue in the national and state courts located in and serving Haryana as the legal forum for any such dispute.
        </p><p>
        Excluding claims for injunctive or other equitable relief, either you or Bright-Mind AI may elect at any point during the dispute to resolve the claim through binding, non-appearance-based arbitration. The dispute will then be resolved using an established alternative dispute resolution ("ADR") provider, mutually agreed upon by you and Bright-Mind AI. The parties and the selected ADR provider shall not involve any personal appearance by the parties or witnesses, unless otherwise mutually agreed by the parties; rather, the arbitration shall be conducted, at the option of the party seeking relief, online, by telephone, or via written submissions alone. Any judgment rendered by the arbitrator may be entered in any court of competent jurisdiction.
        </p>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(20)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">REVISIONS TO THE TERMS<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 20&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        We reserve the right to revise the Terms at our sole discretion at any time. Any revisions to the Terms will be effective immediately upon posting by us. In all cases, your continued use of the Services after publication of such changes, with or without notification, constitutes binding acceptance of the revised Terms.
        </p><p>
        The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.
        </p><p>
        These Terms are effective unless and until terminated by either you or us. You may terminate these Terms at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.
        </p><p>
        If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).
        </p>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(21)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">SEVERABILITY AND WAIVER<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 21 && (
                  <div>
        If it turns out that a particular provision of these Terms is not enforceable, this will not affect any other terms. If you do not comply with these Terms, and we do not take immediate action, this does not indicate that we relinquish any rights that we may have (such as taking action in the future).

        </div>
              )}
            </div>
      <div onClick={() => toggleAccordion(22)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">Data Privacy & Secrecy<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 22&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        You undertake to uphold the principles of data privacy and secrecy in all matters related to the data and information of Bright-Mind AI, its employees/personnel, and/or learners. You understand the critical importance of safeguarding personal information and undertake to adhere to the highest standards of ethical conduct in handling various forms of data and information belonging to Bright-Mind AI, its employees/personnel, and/or learners during your academic/training activities. This data may include but is not limited to personal details, employee details, fellow learner details, proprietary business data, academic/training records, and any communication (Emails, WhatsApp, Phone Calls, Text messages, or any other physical or electronic media used by you in the process) between you and fellow learners, or you and the program managers, academicians, or other facilitators.
        </p><p>
        You commit to the following principles and responsibilities to ensure the privacy and confidentiality of the data:</p>
        <ol>
        <li> You shall not disclose, share, publish, or disseminate in any form any confidential information obtained during your academic pursuits.</li>
        <li> You will not engage in any activity that compromises the privacy of Bright-Mind AI, its employees/personnel, or fellow learners, including unauthorized access or sharing, or any form of data breach.</li>
        </ol><p>
        You understand that a breach of this clause may result in disciplinary action by Bright-Mind AI, legal consequences, and damage to the reputation of Bright-Mind AI. You further understand that such breaches may lead to termination of your academic enrolment and/or provision of any services without any liability whatsoever.
        </p>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(23)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">ACCEPTABLE USE POLICY<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 23&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        You are prohibited from using our Services to share content that:
        </p><ul>
        <li>Is harmful to child.</li>
        <li>Contains illegal content or promotes illegal activities with the intent to commit such activities. Please keep in mind that learners who are as young as 13 use Bright-Mind AI, and we do not allow content that is inappropriate for these younger learners.</li>
        <li>Contains credible threats or organizes acts of real-world violence. We do not allow content that creates a genuine risk of physical injury or property damage, credibly threatens people or public safety, or organizes or encourages harm.</li>
        <li>Harasses others. We encourage commentary about people and matters of public interest, but abusive or otherwise inappropriate content directed at private individuals is not allowed.</li>
        <li>Violates intellectual property, privacy, or other rights. Do not share content that you do not have the right to share, claim content that you did not create as your own, or otherwise infringe or misappropriate someone else’s intellectual property or other rights. Always attribute materials used or quoted by you to the original copyright owner.</li>
        <li>Is patently false and untrue, and is written or published in any form, with the intent to mislead or harass a person, entity or agency for financial gain or to cause any injury to any person.</li>
        <li>Deceives or misleads the addressee about the origin of the message/content or knowingly and intentionally communicates any information which is patently false or misleading in nature but may reasonably be perceived as a fact; or communicates any information which is grossly offensive or menacing in nature.</li>
        <li>Contains software virus or any other computer code, file or program designed to interrupt, destroy or limit the functionality of any computer resource.</li>
        <li>Is grossly harmful, harassing, blasphemous defamatory, obscene, pornographic, paedophilic, libellous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatsoever.</li>
        <li>Threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting any other nation.</li>
        <li>Spams others. Do not share irrelevant or inappropriate advertising, promotional, or solicitation content.</li>
        <li>Otherwise violates these Terms. Please note that specific courses offered as part of the Services may have additional rules and requirements.</li>
        </ul><p>
        You also are not permitted to:
        </p><ul>
        <li>Do anything that violates local, state, national or international law or breaches any of your contractual obligations or fiduciary duties.</li>
        <li>Share your password, let anyone access your Account, or do anything that might put your Account at risk.</li>
        <li>Attempt to access any other user's Account.</li>
        <li>Reproduce, transfer, sell, resell, or otherwise misuse any content from our Services, unless specifically authorized to do so.</li>
        <li>Access, tamper with, or use non-public areas of our systems, unless specifically authorized to do so.</li>
        <li>Break or circumvent our authentication or security measures or otherwise test the vulnerability of our systems or networks, unless specifically authorized to do so.</li>
        <li>Try to reverse engineer any portion of our Services.</li>
        <li>Try to interfere with any user, host, or network, for example by sending a virus, overloading, spamming, or mail-bombing.</li>
        <li>Use our Services to distribute malware.</li>
        <li>Impersonate or misrepresent your affiliation with any person or entity.</li>
        <li>Post or transmit, or cause to be posted or transmitted, any communication or solicitation or other "phishing", "pharming" or "whaling" message designed or intended to obtain password, account, personal information, confidential information or private information from any user of the Services or any other third party whatsoever. However, if any such event does take place, Bright-Mind AI shall not be liable for any loss of data or if the user’s device, computer system or any other property is compromised in any manner.</li>
        <li>Encourage or help anyone do any of the things on this list.</li>
        </ul>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(24)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">COPYRIGHT AND TRADEMARK POLICY<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 24&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        Bright-Mind AI respects the intellectual property rights of our instructors, and other third parties and expects our users to do the same when using the Services. We reserve the right to suspend, disable, or terminate the Accounts of users who infringe or are charged with infringing the copyrights, trademarks, or other intellectual property rights of others.
        </p><p>
        If you believe in good faith that materials on the Services infringe your copyright, you may notify us by email and we will review your complaint. If we deem appropriate, we may remove the offending content, warn the individual who posted the content, and/or take other appropriate actions and communicate the same to you.
        </p><p>
        The email complaint must include the following information:
        </p><p>
        the physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;
        identification of the copyrighted work claimed to have been infringed (or, if multiple copyrighted works located on the Services are covered by a single notification, a representative list of such works);
        identification of the material that is claimed to be infringing or the subject of infringing activity, and information reasonably sufficient to allow Bright-Mind AI to locate the material on the Services;
        the name, address, telephone number, and email address (if available) of the complaining party;
        a statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and
        a statement that the information in the notification is accurate and, under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
        We suggest that you consult your legal advisor before filing a notice. Also, be aware that there can be penalties for false claims.
        </p>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(25)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">PRIVACY<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 25&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        By using the Services, you agree to our Privacy Policy, the terms of which are incorporated into, and form a crucial part of, these Terms. Our Privacy Policy sets out the terms on which we process any personal or financial data we collect from you, or that you provide to us. Our Privacy Policy shall also apply to your use of our website and by using our website, you consent to such processing and you warrant that all data provided by you is accurate.
        </p>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(26)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">FORCE MAJEURE<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 26&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        Neither of us shall be liable to the other for any delay or failure in performance under these Terms, other than payment obligations, arising out of a cause beyond its control and without its fault or negligence. Such causes may include, but are not limited to fires, floods, earthquakes, strikes, unavailability of necessary utilities, blackouts, acts of God, acts of declared or undeclared war, acts of regulatory agencies, or national disasters.
        </p>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(27)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">ENTIRE AGREEMENT<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 27&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        These Terms and any policies or operating rules posted by us on this site or in respect to the Service, along with any Program-specific terms, constitute the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).
        Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.
        </p>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(28)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">ASSIGNMENT<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 28&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
        Bright-Mind AI may freely transfer or assign any portion of its rights or delegate its obligations under these Terms or any Program specific terms. You shall not transfer or assign, by operation of law or otherwise, any portion of your rights or delegate your obligations under these Terms or any Program-specific terms without the prior written consent of Bright-Mind AI.
        </p>
        </div>
              )}
            </div>
        <div onClick={() => toggleAccordion(29)} style={{ cursor: 'pointer' }}>
        <h2 className="flex justify-between items-center text-xl bg-gray-900">GRIEVANCE REDRESSAL<span>{isOpen(1) ? '▲' : '▼'}</span>
        </h2>
        {openSection === 29&& (
          <div className="bg-gray-800 p-4 rounded-lg mt-2"><p>
          The contact details of the office are as below:
          </p><p>
          E-mail id: legal@bright-mind.in
          </p><p>
          All the grievances and any discrepancies of the provider of information shall be redressed within one month (30 days) from the date of receipt of grievance.
          </p>
          </div>
              )}
            </div>
</div>
  );
};

export default Terms;