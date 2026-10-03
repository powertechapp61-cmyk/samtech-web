// On-page SEO copy for every service page (English + Arabic).
// ---------------------------------------------------------------
// Each service gets: a keyword-led H1 and intro, a keyword section,
// key points, FAQs (also published as FAQPage structured data) and
// related-service links. <title>, meta description and meta keywords
// live in src/lib/seo.js (SERVICES).
//
// Keep every statement factual – Google and clients both read this.

export const SERVICE_AREAS = {
  en: ["Rabigh", "Jeddah", "Yanbu", "Jubail", "Dammam"],
  ar: ["رابغ", "جدة", "ينبع", "الجبيل", "الدمام"],
};

export const UI_TEXT = {
  en: {
    keyPoints: "What the service covers",
    areasTitle: "Where we work in Saudi Arabia",
    areasText: (cities) =>
      `From our base in Rabigh we mobilise teams and equipment to plants and project sites across Saudi Arabia, including ${cities}, and across the GCC through the Power Tech Group.`,
    faqTitle: "Frequently asked questions",
    relatedTitle: "Related services",
    allServices: "View all services",
    quoteCta: "Request a quote",
  },
  ar: {
    keyPoints: "ما تشمله الخدمة",
    areasTitle: "مناطق عملنا في المملكة العربية السعودية",
    areasText: (cities) =>
      `من مقرنا في رابغ نرسل فرقنا ومعداتنا إلى المحطات ومواقع المشاريع في جميع أنحاء المملكة العربية السعودية، ومنها ${cities}، وإلى دول الخليج من خلال مجموعة باور تك.`,
    faqTitle: "الأسئلة الشائعة",
    relatedTitle: "خدمات ذات صلة",
    allServices: "عرض جميع الخدمات",
    quoteCta: "اطلب عرض سعر",
  },
};

export const SERVICE_COPY = {
  // -------------------------------------------------------------
  online_safety_testing: {
    related: ["offline_valve_testing", "alltype_valve_services", "online_seal_leaking"],
    en: {
      linkText: "Online safety valve testing (Trevi)",
      h1: "Online Safety Valve Testing (Trevi) in Saudi Arabia",
      intro:
        "SAM Tech carries out online (Trevi-type) safety valve testing across Saudi Arabia – verifying the set pressure of safety and relief valves while your boiler, steam line or process unit stays in service.",
      sectionTitle: "Trevi testing and in-situ PSV testing without shutdown",
      paragraphs: [
        "Online safety valve testing – widely known as Trevi testing – checks the set pressure of a safety valve in place, at normal operating pressure. Our AccuTEST and L-PLAN LEGA TEST systems mount a load cell and electronic puller on the valve stem and apply a measured lifting force. Operating pressure plus this force lifts the disc, and the set pressure is calculated from the force and the disc area, so the line never has to be raised to the valve's set point.",
        "Because the valve stays installed, there is no need to remove it, isolate the line or shut the plant down. That makes online PSV testing the preferred method for boiler safety valves and steam safety relief valves in power plants, refineries, petrochemical plants and desalination plants, where every hour of downtime is costly.",
        "Our test equipment has been tested in the USA and certified by TÜV SÜD, and every valve tested gets a documented test report. In Saudi Arabia we have carried out online safety valve testing for ENGIE's Fadhili O&M company.",
      ],
      points: [
        "Set-pressure verification of safety valves, safety relief valves and pressure relief valves (PSV / PRV) on live systems",
        "No valve removal, no line isolation and no plant shutdown",
        "AccuTEST and L-PLAN LEGA TEST online test systems with TÜV SÜD certified equipment",
        "A test report for every valve, ready for your inspection records",
        "Offline bench testing and repair available for any valve that needs work",
      ],
      faqs: [
        {
          q: "What is Trevi testing of safety valves?",
          a: "Trevi testing is an online method of checking a safety valve's set pressure while it stays installed and the system keeps running. A calibrated puller applies a measured force to the valve stem; together with the operating pressure it lifts the disc, and the set pressure is calculated from the force and the disc area.",
        },
        {
          q: "Can safety valves be tested without shutting down the plant?",
          a: "Yes. Online testing is done at normal operating pressure, so the valve stays in place and production continues. System pressure stays below the set pressure throughout the test, which also makes it safer than raising the line pressure.",
        },
        {
          q: "Which valves can be tested online?",
          a: "All types of safety valves, safety relief valves and pressure relief valves can be tested. The method is most often used for steam safety valves on boilers, headers and steam lines.",
        },
        {
          q: "Do you issue a test report for each valve?",
          a: "Yes. Every valve tested receives a documented report of the measured set pressure for your inspection and maintenance records.",
        },
      ],
    },
    ar: {
      linkText: "اختبار صمامات الأمان أثناء التشغيل (تريفي)",
      h1: "اختبار صمامات الأمان أثناء التشغيل (تريفي) في المملكة العربية السعودية",
      intro:
        "تنفّذ سام تك اختبار صمامات الأمان أثناء التشغيل (نوع تريفي) في جميع أنحاء المملكة العربية السعودية، للتحقق من ضغط ضبط صمامات الأمان وصمامات التنفيس بينما تبقى الغلاية أو خط البخار أو الوحدة الإنتاجية في الخدمة.",
      sectionTitle: "اختبار تريفي واختبار صمامات تخفيف الضغط في موقعها دون إيقاف المحطة",
      paragraphs: [
        "اختبار صمامات الأمان أثناء التشغيل، المعروف باختبار تريفي، يتحقق من ضغط ضبط الصمام وهو في مكانه وعند ضغط التشغيل العادي. تُثبّت أنظمة AccuTEST وL-PLAN LEGA TEST خلية حمل وجهاز سحب إلكتروني على ساق الصمام وتطبّق قوة رفع مقاسة. ضغط التشغيل مع هذه القوة يرفع القرص، ويُحسب ضغط الضبط من القوة ومساحة القرص، فلا حاجة لرفع ضغط الخط إلى نقطة ضبط الصمام.",
        "ولأن الصمام يبقى مركّبًا، لا حاجة لفكّه أو عزل الخط أو إيقاف المحطة. لذلك يُعد الاختبار أثناء التشغيل الطريقة المفضلة لصمامات أمان الغلايات وصمامات البخار في محطات الطاقة والمصافي ومصانع البتروكيماويات ومحطات التحلية، حيث تكون كل ساعة توقف مكلفة.",
        "تم اختبار معداتنا في الولايات المتحدة واعتمادها من TÜV SÜD، ويحصل كل صمام نختبره على تقرير اختبار موثّق. وفي المملكة العربية السعودية نفّذنا اختبار صمامات الأمان أثناء التشغيل لشركة إنجي الفاضلي للتشغيل والصيانة.",
      ],
      points: [
        "التحقق من ضغط ضبط صمامات الأمان وصمامات التنفيس وتخفيف الضغط (PSV / PRV) على الأنظمة العاملة",
        "دون فك الصمام أو عزل الخط أو إيقاف المحطة",
        "أنظمة AccuTEST وL-PLAN LEGA TEST بمعدات معتمدة من TÜV SÜD",
        "تقرير اختبار لكل صمام جاهز لسجلات الفحص",
        "اختبار وإصلاح على منصة الاختبار لأي صمام يحتاج إلى صيانة",
      ],
      faqs: [
        {
          q: "ما هو اختبار تريفي لصمامات الأمان؟",
          a: "اختبار تريفي طريقة للتحقق من ضغط ضبط صمام الأمان وهو مركّب والنظام يعمل. يطبّق جهاز سحب معاير قوة مقاسة على ساق الصمام، ومع ضغط التشغيل يرتفع القرص، ويُحسب ضغط الضبط من القوة ومساحة القرص.",
        },
        {
          q: "هل يمكن اختبار صمامات الأمان دون إيقاف المحطة؟",
          a: "نعم. يتم الاختبار عند ضغط التشغيل العادي، فيبقى الصمام في مكانه ويستمر الإنتاج. ويبقى ضغط النظام أقل من ضغط الضبط طوال الاختبار، مما يجعله أكثر أمانًا من رفع ضغط الخط.",
        },
        {
          q: "ما الصمامات التي يمكن اختبارها أثناء التشغيل؟",
          a: "يمكن اختبار جميع أنواع صمامات الأمان وصمامات التنفيس وصمامات تخفيف الضغط، وتُستخدم الطريقة غالبًا لصمامات أمان البخار على الغلايات والمجمّعات وخطوط البخار.",
        },
        {
          q: "هل تصدرون تقرير اختبار لكل صمام؟",
          a: "نعم. يحصل كل صمام نختبره على تقرير موثّق بضغط الضبط المقاس لسجلات الفحص والصيانة لديكم.",
        },
      ],
    },
  },

  // -------------------------------------------------------------
  offline_valve_testing: {
    related: ["online_safety_testing", "alltype_valve_services", "technical_manpower_supply_for_power_plant_refineries_and_water_plant"],
    en: {
      linkText: "Offline PSV / PRV testing and calibration",
      h1: "Safety Valve Testing & Calibration in Saudi Arabia",
      intro:
        "SAM Tech provides offline safety valve testing, calibration and repair in Saudi Arabia – bench testing PSVs and PRVs, overhauling any valve that fails and returning every valve with a test record.",
      sectionTitle: "Bench testing, calibration and recertification of safety valves",
      paragraphs: [
        "Offline valve testing is done with the valve removed from the line and mounted on a test bench. Each pressure safety valve (PSV) or pressure relief valve (PRV) is checked for set pressure and leakage; if it does not meet specification it is dismantled, inspected and repaired, then re-tested and recalibrated before it goes back into service.",
        "Our workshop and technicians repair every type of valve – from safety and relief valves to control valves, gate valves and large butterfly valves – and work closely with valve and actuator manufacturers. Testing and calibration follow API, ASME and your own specifications.",
        "Offline testing suits planned shutdowns and turnarounds, valves that failed an online test, and valves that cannot be tested in place. We handle single valves or complete shutdown valve lists for power, oil & gas, petrochemical and water clients.",
      ],
      points: [
        "Set-pressure (pop) testing and calibration of PSVs and PRVs on the test bench",
        "Strip-down, inspection, seat and disc repair and parts replacement",
        "Testing and calibration to API, ASME and client specifications",
        "Shutdown and turnaround packages for complete valve lists",
        "Condition report and test record for every valve",
      ],
      faqs: [
        {
          q: "What is the difference between online and offline safety valve testing?",
          a: "Online (Trevi) testing checks the set pressure with the valve in place while the plant runs. Offline testing takes the valve to a test bench, where it can also be dismantled, repaired and recalibrated. Many plants test online between shutdowns and offline during turnarounds.",
        },
        {
          q: "How often should safety valves be tested?",
          a: "Test intervals are set by your plant's inspection programme, the applicable code and the service conditions. We test to your schedule and keep records so trends are easy to follow.",
        },
        {
          q: "Can you repair a safety valve that fails the bench test?",
          a: "Yes. Failed valves are dismantled, inspected, repaired or fitted with new parts, then re-tested and recalibrated before release.",
        },
        {
          q: "Which valves do you test and calibrate?",
          a: "Safety valves, safety relief valves and pressure relief valves, as well as control, gate, globe, ball, check, plug and butterfly valves.",
        },
      ],
    },
    ar: {
      linkText: "اختبار ومعايرة صمامات الأمان على منصة الاختبار",
      h1: "اختبار ومعايرة صمامات الأمان في المملكة العربية السعودية",
      intro:
        "تقدّم سام تك اختبار صمامات الأمان ومعايرتها وإصلاحها خارج الخدمة في المملكة العربية السعودية، باختبار صمامات تخفيف الضغط على منصة الاختبار وإجراء العَمرة لأي صمام لا يجتاز الاختبار، مع سجل اختبار لكل صمام.",
      sectionTitle: "اختبار صمامات الأمان ومعايرتها وإعادة اعتمادها على منصة الاختبار",
      paragraphs: [
        "يتم الاختبار خارج الخدمة بعد فك الصمام من الخط وتثبيته على منصة الاختبار. يُفحص كل صمام أمان أو صمام تخفيف ضغط للتحقق من ضغط الضبط والتسريب، وإذا لم يطابق المواصفات يُفك ويُفحص ويُصلح، ثم يُعاد اختباره ومعايرته قبل إعادته إلى الخدمة.",
        "تصلح ورشتنا وفنيونا جميع أنواع الصمامات، من صمامات الأمان والتنفيس إلى صمامات التحكم والصمامات البوابية وصمامات الفراشة الكبيرة، بالتعاون الوثيق مع مصنّعي الصمامات والمشغلات. ويتم الاختبار والمعايرة وفق مواصفات API وASME ومواصفات العميل.",
        "يناسب الاختبار خارج الخدمة فترات الإيقاف المخطط والعَمرات، والصمامات التي لم تجتز الاختبار أثناء التشغيل، والصمامات التي لا يمكن اختبارها في مكانها. ننفّذ أعمال صمام واحد أو قوائم صمامات كاملة لعملاء الطاقة والنفط والغاز والبتروكيماويات والمياه.",
      ],
      points: [
        "اختبار ضغط الفتح ومعايرة صمامات PSV وPRV على منصة الاختبار",
        "الفك والفحص وإصلاح المقعد والقرص واستبدال القطع",
        "الاختبار والمعايرة وفق API وASME ومواصفات العميل",
        "باقات صمامات كاملة لفترات الإيقاف والعَمرات",
        "تقرير حالة وسجل اختبار لكل صمام",
      ],
      faqs: [
        {
          q: "ما الفرق بين اختبار صمامات الأمان أثناء التشغيل وخارج الخدمة؟",
          a: "الاختبار أثناء التشغيل (تريفي) يتحقق من ضغط الضبط والصمام في مكانه والمحطة تعمل، أما الاختبار خارج الخدمة فيتم على منصة الاختبار حيث يمكن أيضًا فك الصمام وإصلاحه ومعايرته. تختبر كثير من المحطات صماماتها أثناء التشغيل بين فترات الإيقاف، وخارج الخدمة أثناء العَمرات.",
        },
        {
          q: "كم مرة يجب اختبار صمامات الأمان؟",
          a: "تحدد الفترات وفق برنامج الفحص في محطتك والكود المطبق وظروف التشغيل. نختبر وفق جدولكم ونحتفظ بالسجلات لتسهيل متابعة الحالة.",
        },
        {
          q: "هل تصلحون صمام الأمان الذي لا يجتاز الاختبار؟",
          a: "نعم. يُفك الصمام ويُفحص ويُصلح أو تُركّب له قطع جديدة، ثم يُعاد اختباره ومعايرته قبل تسليمه.",
        },
        {
          q: "ما الصمامات التي تختبرونها وتعايرونها؟",
          a: "صمامات الأمان وصمامات التنفيس وصمامات تخفيف الضغط، إضافة إلى صمامات التحكم والبوابية والكروية واللاراجعة والسدادية وصمامات الفراشة.",
        },
      ],
    },
  },

  // -------------------------------------------------------------
  alltype_valve_services: {
    related: ["online_safety_testing", "offline_valve_testing", "hot_tapping"],
    en: {
      linkText: "Industrial valve repair and overhauling",
      h1: "Industrial Valve Repair & Overhauling in Saudi Arabia",
      intro:
        "SAM Tech repairs, services and overhauls industrial valves and actuators of every type in Saudi Arabia – in our workshop or in situ at your plant, from a single valve to a full shutdown list.",
      sectionTitle: "Valve maintenance company for power, oil & gas and water plants",
      paragraphs: [
        "Valves control, isolate and protect every process in a plant, and a valve that leaks, sticks or fails to seal costs production and puts people at risk. Our valve maintenance teams inspect, overhaul, repair and test gate, globe, ball, butterfly, check, plug, knife-gate and control valves of any size, age, make, pressure rating or material.",
        "Work is done in our valve workshop or in situ with portable valve machines, which avoids removing large valves and shortens shutdowns. We also service and overhaul electric, pneumatic and hydraulic actuators and calibrate control valves.",
        "In Saudi Arabia we have completed major valve overhauling for Petro Rabigh and provide valve services at NOMAC's Red Sea power stations. Across the GCC our group's valve clients include GPIC, Aldur Power, ENGIE STOMO and Enerflex.",
      ],
      points: [
        "Valve overhauling: strip-down, inspection, repair and pressure testing",
        "Seat, disc, stem, gland packing and seal replacement",
        "In-situ valve servicing with portable valve machines",
        "Control valve repair and calibration; electric, pneumatic and hydraulic actuator servicing",
        "Valve packages for planned shutdowns and turnarounds",
      ],
      faqs: [
        {
          q: "Do you repair valves on site or only in a workshop?",
          a: "Both. Valves can be overhauled in our workshop, or serviced in situ with portable equipment when removal is impractical or would extend the shutdown.",
        },
        {
          q: "Which types of valves do you service?",
          a: "Gate, globe, ball, butterfly, check, plug, knife-gate, hydrant, control and safety valves, of any size, make, pressure rating or material.",
        },
        {
          q: "Do you service valve actuators?",
          a: "Yes. We service and overhaul electric, pneumatic and hydraulic actuators from all major manufacturers.",
        },
        {
          q: "Can you handle a complete valve list for a shutdown?",
          a: "Yes. We plan and carry out valve packages for shutdowns and turnarounds, from one valve to a complete plant list, with a test record for each valve.",
        },
      ],
    },
    ar: {
      linkText: "إصلاح الصمامات الصناعية وعَمرتها",
      h1: "إصلاح الصمامات الصناعية وعَمرتها في المملكة العربية السعودية",
      intro:
        "تصلح سام تك الصمامات الصناعية والمشغلات بجميع أنواعها وتصونها وتجري لها العَمرة في المملكة العربية السعودية، في ورشتنا أو في موقع المحطة، من صمام واحد إلى قائمة إيقاف كاملة.",
      sectionTitle: "شركة صيانة صمامات لمحطات الطاقة والنفط والغاز والمياه",
      paragraphs: [
        "تتحكم الصمامات في كل عملية داخل المحطة وتعزلها وتحميها، والصمام الذي يسرّب أو يعلق أو لا يُحكم الإغلاق يكلّف خسارة في الإنتاج ويعرّض الأفراد للخطر. تفحص فرق صيانة الصمامات لدينا الصمامات البوابية والكروية والفراشة واللاراجعة والسدادية وصمامات التحكم وتجري لها العَمرة والإصلاح والاختبار، مهما كان حجمها أو عمرها أو الشركة المصنعة أو فئة الضغط أو مادة التصنيع.",
        "ننفّذ العمل في ورشة الصمامات أو في الموقع باستخدام ماكينات صمامات متنقلة، مما يغني عن فك الصمامات الكبيرة ويقصّر مدة الإيقاف. كما نصون المشغلات الكهربائية والهوائية والهيدروليكية ونعاير صمامات التحكم.",
        "في المملكة العربية السعودية أنجزنا أعمال عَمرة صمامات رئيسية لشركة بترو رابغ، ونقدم خدمات الصمامات في محطات نوماك على البحر الأحمر. ومن عملاء الصمامات لمجموعتنا في الخليج: جيبك والدور للطاقة وإنجي ستومو وإنرفلكس.",
      ],
      points: [
        "عَمرة الصمامات: الفك والفحص والإصلاح واختبار الضغط",
        "استبدال المقاعد والأقراص والسيقان وحشوات الإحكام والموانع",
        "صيانة الصمامات في الموقع بماكينات متنقلة",
        "إصلاح صمامات التحكم ومعايرتها وصيانة المشغلات الكهربائية والهوائية والهيدروليكية",
        "باقات صمامات لفترات الإيقاف والعَمرات المخططة",
      ],
      faqs: [
        {
          q: "هل تصلحون الصمامات في الموقع أم في الورشة فقط؟",
          a: "كلاهما. يمكن إجراء العَمرة في ورشتنا، أو الصيانة في الموقع بمعدات متنقلة عندما يكون الفك غير عملي أو يطيل مدة الإيقاف.",
        },
        {
          q: "ما أنواع الصمامات التي تصونونها؟",
          a: "الصمامات البوابية والكروية وصمامات الفراشة واللاراجعة والسدادية وصمامات السكين وصمامات الحريق وصمامات التحكم والأمان، بأي حجم أو شركة مصنعة أو فئة ضغط أو مادة.",
        },
        {
          q: "هل تصونون مشغلات الصمامات؟",
          a: "نعم. نصون المشغلات الكهربائية والهوائية والهيدروليكية من جميع الشركات المصنعة الرئيسية ونجري لها العَمرة.",
        },
        {
          q: "هل يمكنكم تنفيذ قائمة صمامات كاملة لفترة إيقاف؟",
          a: "نعم. نخطط وننفذ باقات الصمامات لفترات الإيقاف والعَمرات، من صمام واحد إلى قائمة المحطة كاملة، مع سجل اختبار لكل صمام.",
        },
      ],
    },
  },

  // -------------------------------------------------------------
  technical_manpower_supply_for_power_plant_refineries_and_water_plant: {
    related: ["alltype_valve_services", "heat_exchanger", "online_safety_testing"],
    en: {
      linkText: "Technical manpower supply",
      h1: "Technical Manpower Supply in Saudi Arabia",
      intro:
        "SAM Tech supplies skilled, HSE-trained technical manpower in Saudi Arabia – engineers, technicians and operators for power plants, refineries, petrochemical plants and water plants, on short-term or long-term contracts.",
      sectionTitle: "Skilled manpower for O&M, shutdowns and turnarounds",
      paragraphs: [
        "Plants run on people. We provide mechanical, electrical, instrumentation, civil and operations personnel for long-term operation and maintenance (O&M) contracts, and for planned shutdowns, turnarounds and emergency outages where extra hands are needed quickly.",
        "Every candidate is technically screened before deployment. We manage the full mobilisation process – documentation, medical fitness, visa processing, site induction and HSE compliance – and provide contract management and rapid replacement so your site is never short-staffed.",
        "Our people support operations at NOMAC's Red Sea power stations under a long-term manpower contract, and we draw on the Power Tech Group's workforce and its training institute in India to fill specialist roles quickly.",
      ],
      points: [
        "Mechanical, electrical and instrumentation technicians and supervisors",
        "Power plant operators and O&M staff",
        "Shutdown and turnaround manpower at short notice",
        "Full mobilisation: visas, medicals, documentation and site induction",
        "Flexible short-term, long-term and turnaround contracts",
      ],
      faqs: [
        {
          q: "What kind of technical manpower do you supply?",
          a: "Engineers, supervisors, technicians and plant operators in the mechanical, electrical, instrumentation, civil and operations disciplines, for power, oil & gas, petrochemical and water treatment plants.",
        },
        {
          q: "Can you supply manpower for a shutdown or turnaround?",
          a: "Yes. We supply teams for planned shutdowns, turnarounds and emergency outages, as well as for long-term O&M contracts.",
        },
        {
          q: "Do you handle visas and mobilisation?",
          a: "Yes. We manage documentation, medical fitness, visa processing, site induction and HSE compliance before anyone reaches site.",
        },
        {
          q: "Which industries do you supply manpower to?",
          a: "Power plants, refineries, petrochemical complexes, desalination and water treatment plants, and EPC contractors working on these sites.",
        },
      ],
    },
    ar: {
      linkText: "توريد الكوادر الفنية",
      h1: "توريد الكوادر الفنية في المملكة العربية السعودية",
      intro:
        "توفّر سام تك كوادر فنية ماهرة ومدرّبة على الصحة والسلامة في المملكة العربية السعودية، من مهندسين وفنيين ومشغلين لمحطات الطاقة والمصافي ومصانع البتروكيماويات ومحطات المياه، بعقود قصيرة أو طويلة الأجل.",
      sectionTitle: "كوادر ماهرة للتشغيل والصيانة وفترات الإيقاف والعَمرات",
      paragraphs: [
        "تعمل المحطات بفضل الأفراد. نوفّر كوادر في التخصصات الميكانيكية والكهربائية والأجهزة الدقيقة والمدنية والتشغيل لعقود التشغيل والصيانة طويلة الأجل، ولفترات الإيقاف المخطط والعَمرات والأعطال الطارئة التي تحتاج إلى أيدٍ إضافية بسرعة.",
        "يخضع كل مرشح لتقييم فني قبل إرساله إلى الموقع. ونتولى عملية التجهيز كاملة من الوثائق واللياقة الطبية والتأشيرات والتعريف بالموقع والالتزام بمتطلبات الصحة والسلامة، مع إدارة العقد والاستبدال السريع حتى لا يعاني موقعك من نقص في العمالة.",
        "يدعم أفرادنا التشغيل في محطات نوماك على البحر الأحمر ضمن عقد توريد كوادر طويل الأجل، ونستفيد من القوى العاملة لمجموعة باور تك ومعهد التدريب التابع لها في الهند لشغل الوظائف التخصصية بسرعة.",
      ],
      points: [
        "فنيون ومشرفون في التخصصات الميكانيكية والكهربائية والأجهزة الدقيقة",
        "مشغلو محطات طاقة وكوادر تشغيل وصيانة",
        "كوادر لفترات الإيقاف والعَمرات في وقت قصير",
        "تجهيز كامل: التأشيرات والفحوص الطبية والوثائق والتعريف بالموقع",
        "عقود مرنة قصيرة وطويلة الأجل ولفترات العَمرات",
      ],
      faqs: [
        {
          q: "ما نوع الكوادر الفنية التي توفرونها؟",
          a: "مهندسون ومشرفون وفنيون ومشغلو محطات في التخصصات الميكانيكية والكهربائية والأجهزة الدقيقة والمدنية والتشغيل، لمحطات الطاقة والنفط والغاز والبتروكيماويات ومعالجة المياه.",
        },
        {
          q: "هل توفرون كوادر لفترات الإيقاف أو العَمرات؟",
          a: "نعم. نوفّر فرقًا لفترات الإيقاف المخطط والعَمرات والأعطال الطارئة، إضافة إلى عقود التشغيل والصيانة طويلة الأجل.",
        },
        {
          q: "هل تتولون التأشيرات وتجهيز العمالة؟",
          a: "نعم. نتولى الوثائق واللياقة الطبية والتأشيرات والتعريف بالموقع والالتزام بمتطلبات الصحة والسلامة قبل وصول أي فرد إلى الموقع.",
        },
        {
          q: "لأي قطاعات توفرون الكوادر؟",
          a: "محطات الطاقة والمصافي ومجمعات البتروكيماويات ومحطات التحلية ومعالجة المياه، ومقاولو الهندسة والتوريد والإنشاء العاملون في هذه المواقع.",
        },
      ],
    },
  },

  // -------------------------------------------------------------
  online_seal_leaking: {
    related: ["hot_tapping", "alltype_valve_services", "heat_exchanger"],
    en: {
      linkText: "Online leak sealing",
      h1: "Online Leak Sealing Services in Saudi Arabia",
      intro:
        "SAM Tech seals live leaks on pipelines, flanges, valves and vessels in Saudi Arabia without a shutdown – steam, gas, hydrocarbon and chemical leaks at temperatures up to 700°C.",
      sectionTitle: "Live leak repair for steam, gas and process lines",
      paragraphs: [
        "Online leak sealing stops a leak while the line stays pressurised and in service. Our technicians fit an engineered clamp or enclosure around the leak and inject a sealing compound selected for the fluid, pressure and temperature, or apply Sylmasta polymer composite repairs where they suit the leak.",
        "Typical repairs include flange leaks, valve gland, bonnet and body leaks, heat exchanger leaks, pipeline and riser leaks and expansion joints. Each repair is planned before the job, so the plant can keep running safely until a planned shutdown.",
        "Sealing leaks online saves energy and product, cuts emissions and noise, and removes the safety hazard of a steam or gas leak. We have carried out online leak sealing for NOMAC in Saudi Arabia and serve power, oil & gas, petrochemical and water plants across the Kingdom.",
      ],
      points: [
        "Steam, gas, hydrocarbon and chemical leaks at up to 700°C",
        "Flange, valve gland, bonnet and body leak sealing",
        "Engineered clamps and enclosures with injection compounds",
        "Sylmasta polymer composite pipe repairs",
        "No shutdown and no loss of production",
      ],
      faqs: [
        {
          q: "What is online leak sealing?",
          a: "It is a way of sealing a leak on a live, pressurised system without shutting it down. A clamp or enclosure is fitted around the leak and filled with a sealing compound under pressure.",
        },
        {
          q: "What temperatures and fluids can be sealed?",
          a: "Our sealing compounds handle steam, chemical, hydrocarbon and gas leaks at temperatures up to 700°C.",
        },
        {
          q: "Is online leak sealing a permanent repair?",
          a: "It is designed to keep the plant running safely until a planned shutdown, when the component can be permanently repaired or replaced.",
        },
        {
          q: "Which leaks can you seal online?",
          a: "Flange leaks, valve gland, bonnet and body leaks, heat exchanger and pressure vessel leaks, pipeline and riser leaks, and expansion joint leaks.",
        },
      ],
    },
    ar: {
      linkText: "إحكام التسريبات أثناء التشغيل",
      h1: "خدمات إحكام التسريبات أثناء التشغيل في المملكة العربية السعودية",
      intro:
        "تُحكم سام تك التسريبات الحية في خطوط الأنابيب والفلنجات والصمامات والأوعية في المملكة العربية السعودية دون إيقاف التشغيل، لتسريبات البخار والغاز والهيدروكربونات والكيماويات عند درجات حرارة تصل إلى 700 درجة مئوية.",
      sectionTitle: "إصلاح التسريبات الحية في خطوط البخار والغاز والعمليات",
      paragraphs: [
        "يوقف إحكام التسريبات أثناء التشغيل التسريب بينما يبقى الخط تحت الضغط وفي الخدمة. يركّب فنيونا مشبكًا أو غلافًا مصممًا حول موضع التسريب ويحقنون مادة إحكام مختارة وفق نوع السائل والضغط والحرارة، أو يستخدمون إصلاحات سيلماستا البوليمرية المركبة حين تناسب التسريب.",
        "تشمل الإصلاحات المعتادة تسريبات الفلنجات، وتسريبات حشوة الصمام وغطائه وجسمه، وتسريبات المبادلات الحرارية، وخطوط الأنابيب والصواعد، ووصلات التمدد. ويُخطط لكل إصلاح قبل التنفيذ حتى تستمر المحطة في العمل بأمان حتى موعد الإيقاف المخطط.",
        "يوفر إحكام التسريبات أثناء التشغيل الطاقة والمنتج، ويقلل الانبعاثات والضوضاء، ويزيل خطر تسريبات البخار والغاز. نفّذنا أعمال إحكام التسريبات أثناء التشغيل لشركة نوماك في المملكة، ونخدم محطات الطاقة والنفط والغاز والبتروكيماويات والمياه في جميع أنحاء المملكة.",
      ],
      points: [
        "تسريبات البخار والغاز والهيدروكربونات والكيماويات حتى 700 درجة مئوية",
        "إحكام تسريبات الفلنجات وحشوة الصمام وغطائه وجسمه",
        "مشابك وأغلفة مصممة مع مواد الحقن",
        "إصلاحات سيلماستا البوليمرية المركبة للأنابيب",
        "دون إيقاف التشغيل ودون خسارة في الإنتاج",
      ],
      faqs: [
        {
          q: "ما هو إحكام التسريبات أثناء التشغيل؟",
          a: "طريقة لإحكام التسريب في نظام يعمل تحت الضغط دون إيقافه، حيث يُركّب مشبك أو غلاف حول موضع التسريب ويُملأ بمادة إحكام تحت الضغط.",
        },
        {
          q: "ما درجات الحرارة والسوائل التي يمكن إحكامها؟",
          a: "تتعامل مواد الإحكام لدينا مع تسريبات البخار والكيماويات والهيدروكربونات والغاز حتى درجة حرارة 700 درجة مئوية.",
        },
        {
          q: "هل إحكام التسريبات أثناء التشغيل إصلاح دائم؟",
          a: "صُمم لإبقاء المحطة تعمل بأمان حتى الإيقاف المخطط، حيث يمكن إصلاح المكوّن أو استبداله بشكل دائم.",
        },
        {
          q: "ما التسريبات التي يمكنكم إحكامها أثناء التشغيل؟",
          a: "تسريبات الفلنجات، وتسريبات حشوة الصمام وغطائه وجسمه، وتسريبات المبادلات الحرارية وأوعية الضغط، وخطوط الأنابيب والصواعد، ووصلات التمدد.",
        },
      ],
    },
  },

  // -------------------------------------------------------------
  hot_tapping: {
    related: ["online_seal_leaking", "alltype_valve_services", "technical_manpower_supply_for_power_plant_refineries_and_water_plant"],
    en: {
      linkText: "Hot tapping and live gate valve insertion",
      h1: "Hot Tapping Services in Saudi Arabia",
      intro:
        "SAM Tech performs hot tapping in Saudi Arabia – making new connections, bypasses and gate valve insertions on live, pressurised pipelines without stopping the flow.",
      sectionTitle: "Hot tap connections on live pipelines",
      paragraphs: [
        "Hot tapping, also called pressure tapping, is a way of cutting into a pipeline or vessel while it is under pressure. A fitting and a valve are attached to the pipe, a hot tapping machine cuts through the wall, and the cut section is withdrawn through the valve – so a new branch, bypass or connection is made without draining or depressurising the line.",
        "We also insert S-type gate valves into live lines, creating new isolation points for future maintenance without a shutdown. Before every job our engineers review the pipe material, pressure rating, operating conditions and fluid; after the work we pressure test, check for leaks and hand over full completion documents.",
        "Hot tapping is used by oil and gas operators, power plants, water authorities and petrochemical plants across Saudi Arabia whenever a shutdown is impractical or too costly.",
      ],
      points: [
        "Hot tap branch connections on live pipelines",
        "S-type gate valve insertion (online gate valve)",
        "Bypass installations and pipeline modifications",
        "Engineering review before every hot tap",
        "Pressure testing, leak check and completion documents",
      ],
      faqs: [
        {
          q: "What is hot tapping?",
          a: "Hot tapping is the technique of cutting into a pipeline or vessel while it stays in service and under pressure, to add a branch, bypass or valve without a shutdown.",
        },
        {
          q: "Is hot tapping safe?",
          a: "Yes, when it is engineered and carried out by trained crews with certified equipment, in line with industry safety standards. The line is never depressurised, which also avoids the risks of draining and restarting the system.",
        },
        {
          q: "What is S-type gate valve insertion?",
          a: "It is the insertion of a gate valve into a live line, creating a new isolation point for future maintenance without interrupting supply.",
        },
        {
          q: "Which industries use hot tapping?",
          a: "Oil and gas, power generation, petrochemicals and water distribution – any network where a shutdown would stop production or interrupt supply.",
        },
      ],
    },
    ar: {
      linkText: "التفريع الساخن وتركيب الصمامات أثناء التشغيل",
      h1: "خدمات التفريع الساخن في المملكة العربية السعودية",
      intro:
        "تنفّذ سام تك أعمال التفريع الساخن في المملكة العربية السعودية، لإنشاء وصلات وتحويلات جديدة وتركيب صمامات بوابية على خطوط أنابيب حية تحت الضغط دون إيقاف التدفق.",
      sectionTitle: "وصلات التفريع الساخن على خطوط الأنابيب العاملة",
      paragraphs: [
        "التفريع الساخن طريقة لثقب خط الأنابيب أو الوعاء وهو تحت الضغط. تُثبّت وصلة وصمام على الأنبوب، وتقطع ماكينة التفريع الساخن جدار الأنبوب، ثم تُسحب القطعة المقطوعة عبر الصمام، فيتم إنشاء فرع أو تحويلة أو وصلة جديدة دون تصريف الخط أو خفض ضغطه.",
        "كما نركّب صمامات بوابية من نوع S في الخطوط العاملة لإنشاء نقاط عزل جديدة للصيانة المستقبلية دون إيقاف. وقبل كل عمل يراجع مهندسونا مادة الأنبوب وفئة الضغط وظروف التشغيل ونوع السائل، وبعد العمل نجري اختبار الضغط وفحص التسريب ونسلّم وثائق الإنجاز كاملة.",
        "تستخدم شركات النفط والغاز ومحطات الطاقة وهيئات المياه ومصانع البتروكيماويات في المملكة التفريع الساخن كلما كان الإيقاف غير عملي أو مكلفًا.",
      ],
      points: [
        "وصلات تفريع ساخن على خطوط الأنابيب العاملة",
        "تركيب صمامات بوابية من نوع S أثناء التشغيل",
        "تركيب التحويلات وتعديل خطوط الأنابيب",
        "مراجعة هندسية قبل كل عملية تفريع",
        "اختبار الضغط وفحص التسريب ووثائق الإنجاز",
      ],
      faqs: [
        {
          q: "ما هو التفريع الساخن؟",
          a: "التفريع الساخن تقنية لقطع جدار خط الأنابيب أو الوعاء وهو في الخدمة وتحت الضغط، لإضافة فرع أو تحويلة أو صمام دون إيقاف.",
        },
        {
          q: "هل التفريع الساخن آمن؟",
          a: "نعم، عندما يُصمم وينفّذ بواسطة فرق مدربة بمعدات معتمدة ووفق معايير السلامة الصناعية. ولا يُخفض ضغط الخط إطلاقًا، مما يتجنب مخاطر تصريف النظام وإعادة تشغيله.",
        },
        {
          q: "ما هو تركيب الصمام البوابي من نوع S؟",
          a: "هو تركيب صمام بوابي في خط عامل لإنشاء نقطة عزل جديدة للصيانة المستقبلية دون قطع الإمداد.",
        },
        {
          q: "ما القطاعات التي تستخدم التفريع الساخن؟",
          a: "النفط والغاز وتوليد الطاقة والبتروكيماويات وتوزيع المياه، وأي شبكة يؤدي إيقافها إلى توقف الإنتاج أو انقطاع الإمداد.",
        },
      ],
    },
  },

  // -------------------------------------------------------------
  heat_exchanger: {
    related: ["online_seal_leaking", "alltype_valve_services", "technical_manpower_supply_for_power_plant_refineries_and_water_plant"],
    en: {
      linkText: "Heat exchanger maintenance and retubing",
      h1: "Heat Exchanger Maintenance & Retubing in Saudi Arabia",
      intro:
        "SAM Tech maintains, retubes, repairs and supplies heat exchangers in Saudi Arabia for power plants, refineries, petrochemical plants and desalination plants.",
      sectionTitle: "Shell and tube heat exchanger cleaning, retubing and repair",
      paragraphs: [
        "Fouling, scaling and tube failures cut heat transfer and force unplanned shutdowns. Our heat exchanger maintenance covers the full cycle: dismantling, inspection, tube bundle cleaning and hydro jetting, repair of leaking tubes, tube sheet repair to ASME code, reassembly and hydro testing before handover.",
        "For exchangers at the end of their tube life we carry out full retubing – removing the old tubes, repairing the tube sheet, replacing baffle plates and installing new tubes made to meet or exceed the original specification. We also fabricate shells and supply new heat exchangers to ASME Section VIII and TEMA, including shell-and-tube, plate and air-cooled types.",
        "Our teams support planned turnarounds as well as emergency breakdowns, with critical spares supply to get units back into service quickly.",
      ],
      points: [
        "Tube bundle removal, cleaning and hydro jetting",
        "Retubing, tube repair and tube sheet repair to ASME code",
        "Hydrostatic and pneumatic pressure testing",
        "New heat exchangers to ASME Section VIII and TEMA",
        "Turnaround support and emergency breakdown response",
      ],
      faqs: [
        {
          q: "What does heat exchanger maintenance include?",
          a: "Dismantling, inspection, manual cleaning and hydro jetting, repair of leaking tubes, reassembly and hydro testing, followed by handover at site.",
        },
        {
          q: "When does a heat exchanger need retubing?",
          a: "When many tubes are leaking, plugged or worn and the exchanger can no longer reach its design performance. Retubing restores it without replacing the whole unit.",
        },
        {
          q: "Do you supply new heat exchangers?",
          a: "Yes. We supply heat exchangers built to ASME Section VIII and TEMA, and we fabricate heater shells.",
        },
        {
          q: "Can you respond to an emergency breakdown?",
          a: "Yes. We provide emergency breakdown response and critical spare parts to return exchangers to service quickly.",
        },
      ],
    },
    ar: {
      linkText: "صيانة المبادلات الحرارية واستبدال أنابيبها",
      h1: "صيانة المبادلات الحرارية واستبدال أنابيبها في المملكة العربية السعودية",
      intro:
        "تصون سام تك المبادلات الحرارية وتستبدل أنابيبها وتصلحها وتوردها في المملكة العربية السعودية لمحطات الطاقة والمصافي ومصانع البتروكيماويات ومحطات التحلية.",
      sectionTitle: "تنظيف المبادلات الحرارية ذات الغلاف والأنابيب واستبدال أنابيبها وإصلاحها",
      paragraphs: [
        "تؤدي الترسبات والقشور وتلف الأنابيب إلى ضعف انتقال الحرارة وتوقفات غير مخططة. تغطي خدمة صيانة المبادلات الحرارية لدينا الدورة كاملة: الفك والفحص وتنظيف حزمة الأنابيب بالمياه عالية الضغط، وإصلاح الأنابيب المسرّبة، وإصلاح لوح الأنابيب وفق كود ASME، وإعادة التجميع واختبار الضغط الهيدروستاتيكي قبل التسليم.",
        "وللمبادلات التي انتهى العمر الافتراضي لأنابيبها ننفّذ استبدال الأنابيب بالكامل، بإزالة الأنابيب القديمة وإصلاح لوح الأنابيب واستبدال الحواجز وتركيب أنابيب جديدة تطابق المواصفات الأصلية أو تتجاوزها. كما نصنّع الأغلفة ونورّد مبادلات حرارية جديدة وفق ASME القسم الثامن وTEMA، ومنها مبادلات الغلاف والأنابيب والألواح والمبردة بالهواء.",
        "تدعم فرقنا العَمرات المخططة والأعطال الطارئة، مع توريد قطع الغيار الحرجة لإعادة الوحدات إلى الخدمة بسرعة.",
      ],
      points: [
        "إخراج حزمة الأنابيب وتنظيفها بالمياه عالية الضغط",
        "استبدال الأنابيب وإصلاحها وإصلاح لوح الأنابيب وفق كود ASME",
        "اختبار الضغط الهيدروستاتيكي والهوائي",
        "مبادلات حرارية جديدة وفق ASME القسم الثامن وTEMA",
        "دعم العَمرات والاستجابة للأعطال الطارئة",
      ],
      faqs: [
        {
          q: "ماذا تشمل صيانة المبادلات الحرارية؟",
          a: "الفك والفحص والتنظيف اليدوي وبالمياه عالية الضغط، وإصلاح الأنابيب المسرّبة، وإعادة التجميع واختبار الضغط، ثم التسليم في الموقع.",
        },
        {
          q: "متى يحتاج المبادل الحراري إلى استبدال أنابيبه؟",
          a: "عندما تكثر الأنابيب المسرّبة أو المسدودة أو المتآكلة ولا يعود المبادل قادرًا على تحقيق أدائه التصميمي. يعيد استبدال الأنابيب كفاءته دون استبدال الوحدة كاملة.",
        },
        {
          q: "هل توردون مبادلات حرارية جديدة؟",
          a: "نعم. نورّد مبادلات حرارية مصنّعة وفق ASME القسم الثامن وTEMA، ونصنّع أغلفة السخانات.",
        },
        {
          q: "هل تستجيبون للأعطال الطارئة؟",
          a: "نعم. نقدّم الاستجابة للأعطال الطارئة وقطع الغيار الحرجة لإعادة المبادلات إلى الخدمة بسرعة.",
        },
      ],
    },
  },

  // -------------------------------------------------------------
  ro_plant_epc_contracts: {
    related: ["ro_membrane", "solar_plant_epc", "technical_manpower_supply_for_power_plant_refineries_and_water_plant"],
    en: {
      linkText: "RO desalination plant EPC",
      h1: "RO Plant EPC Contractor in Saudi Arabia",
      intro:
        "SAM Tech delivers reverse osmosis (RO) desalination and water treatment plants in Saudi Arabia on an EPC basis – engineering, procurement, construction and commissioning of plants up to 2 million imperial gallons per day.",
      sectionTitle: "Reverse osmosis plant design, supply and construction",
      paragraphs: [
        "Water security is a top priority for industry and municipalities in Saudi Arabia. As an RO plant EPC contractor we take responsibility from process design to performance testing: hydraulic modelling, pretreatment and filtration, high-pressure pumps, RO membranes and pressure vessels, energy recovery devices, chemical dosing and automated control panels.",
        "Our construction teams manage civil, mechanical, electrical and instrumentation works, then commission the plant and test it against the contracted output, recovery rate and water quality. Operators are trained and the plant is handed over with as-built documents.",
        "We build reverse osmosis plants for seawater desalination and water purification, serving power and water utilities, industrial complexes and large real estate and infrastructure developments.",
      ],
      points: [
        "RO plants up to 2 MIGD (million imperial gallons per day)",
        "Process design, hydraulic modelling and system engineering",
        "Supply of membranes, high-pressure pumps, energy recovery devices, pretreatment and controls",
        "Civil, mechanical, electrical and instrumentation construction",
        "Commissioning, performance testing and operator training",
      ],
      faqs: [
        {
          q: "What capacity of RO plant do you build?",
          a: "We deliver reverse osmosis plants with a production capacity of up to 2 million imperial gallons per day (2 MIGD).",
        },
        {
          q: "What does an RO plant EPC contract include?",
          a: "Engineering design, procurement of all major equipment, civil and electro-mechanical construction, commissioning, performance testing, operator training and handover.",
        },
        {
          q: "Do you also upgrade existing RO plants?",
          a: "Yes. Our RO plant retrofitting and membrane replacement service restores the output and efficiency of ageing plants.",
        },
        {
          q: "Who are your RO plants for?",
          a: "Power and water authorities, municipal water boards, petrochemical and industrial complexes, and large real estate and infrastructure developers.",
        },
      ],
    },
    ar: {
      linkText: "عقود EPC لمحطات التحلية بالتناضح العكسي",
      h1: "مقاول EPC لمحطات التحلية بالتناضح العكسي في المملكة العربية السعودية",
      intro:
        "تنفّذ سام تك محطات تحلية ومعالجة المياه بالتناضح العكسي في المملكة العربية السعودية بنظام الهندسة والتوريد والإنشاء (EPC)، من التصميم والتوريد إلى الإنشاء والتشغيل التجريبي، لمحطات تصل طاقتها إلى 2 مليون غالون إمبراطوري يوميًا.",
      sectionTitle: "تصميم محطات التناضح العكسي وتوريدها وإنشاؤها",
      paragraphs: [
        "يُعد الأمن المائي أولوية قصوى للصناعة والبلديات في المملكة العربية السعودية. وبصفتنا مقاول EPC لمحطات التناضح العكسي نتحمل المسؤولية من التصميم إلى اختبار الأداء: النمذجة الهيدروليكية، والمعالجة الأولية والترشيح، ومضخات الضغط العالي، والأغشية وأوعية الضغط، وأجهزة استرجاع الطاقة، وحقن الكيماويات، ولوحات التحكم الآلي.",
        "تتولى فرق الإنشاء لدينا الأعمال المدنية والميكانيكية والكهربائية والأجهزة الدقيقة، ثم نشغّل المحطة ونختبرها وفق الإنتاج المتعاقد عليه ونسبة الاسترجاع وجودة المياه، وندرب المشغلين ونسلّم المحطة مع مخططات التنفيذ النهائية.",
        "ننشئ محطات التناضح العكسي لتحلية مياه البحر وتنقية المياه لخدمة هيئات الكهرباء والمياه والمجمعات الصناعية ومشاريع التطوير العقاري والبنية التحتية الكبرى.",
      ],
      points: [
        "محطات تناضح عكسي حتى 2 مليون غالون إمبراطوري يوميًا",
        "التصميم الهندسي للعمليات والنمذجة الهيدروليكية",
        "توريد الأغشية ومضخات الضغط العالي وأجهزة استرجاع الطاقة والمعالجة الأولية وأنظمة التحكم",
        "الأعمال المدنية والميكانيكية والكهربائية والأجهزة الدقيقة",
        "التشغيل التجريبي واختبار الأداء وتدريب المشغلين",
      ],
      faqs: [
        {
          q: "ما الطاقة الإنتاجية لمحطات التناضح العكسي التي تنشئونها؟",
          a: "ننفّذ محطات تناضح عكسي بطاقة إنتاجية تصل إلى 2 مليون غالون إمبراطوري يوميًا.",
        },
        {
          q: "ماذا يشمل عقد EPC لمحطة التناضح العكسي؟",
          a: "التصميم الهندسي، وتوريد جميع المعدات الرئيسية، والإنشاءات المدنية والكهروميكانيكية، والتشغيل التجريبي، واختبار الأداء، وتدريب المشغلين، والتسليم.",
        },
        {
          q: "هل تطوّرون محطات التناضح العكسي القائمة أيضًا؟",
          a: "نعم. تعيد خدمة تأهيل المحطات واستبدال الأغشية لدينا إنتاج المحطات القديمة وكفاءتها.",
        },
        {
          q: "لمن تُنشأ محطات التناضح العكسي لديكم؟",
          a: "هيئات الكهرباء والمياه، ومصالح المياه البلدية، ومجمعات البتروكيماويات والصناعة، ومطوري العقارات والبنية التحتية الكبرى.",
        },
      ],
    },
  },

  // -------------------------------------------------------------
  solar_plant_epc: {
    related: ["ro_plant_epc_contracts", "technical_manpower_supply_for_power_plant_refineries_and_water_plant", "upvc_aluminiumdoors_windowsfabrication"],
    en: {
      linkText: "Solar PV plant EPC and O&M",
      h1: "Solar PV Plant EPC & O&M in Saudi Arabia",
      intro:
        "SAM Tech designs, builds and maintains solar PV power plants of up to 5 MW in Saudi Arabia – turnkey EPC for industrial, commercial and utility sites, followed by long-term solar O&M.",
      sectionTitle: "Turnkey solar power plant installation and maintenance",
      paragraphs: [
        "Saudi Arabia has some of the highest solar irradiance in the world, which makes on-site solar one of the most cost-effective ways to cut energy costs and grid dependence. Our solar EPC service starts with a site survey, irradiance assessment and feasibility study, followed by detailed design of the PV array layout, mounting structures, single-line diagrams and grid connection.",
        "We supply and install solar panels, string or central inverters, mounting structures, DC and AC cabling and monitoring systems, then commission the plant to international standards.",
        "After handover our solar O&M programme covers preventive and corrective maintenance, performance monitoring and energy-yield reporting, so the plant keeps delivering its expected output.",
      ],
      points: [
        "Solar PV plants of up to 5 MW",
        "Site survey, solar irradiance assessment and feasibility study",
        "PV array, mounting structure and grid connection design",
        "Supply and installation of panels, inverters and cabling",
        "Solar O&M with performance monitoring and yield reporting",
      ],
      faqs: [
        {
          q: "What size of solar plant can you build?",
          a: "We deliver solar PV plants of up to 5 MW for industrial, commercial, institutional and utility clients.",
        },
        {
          q: "What is included in solar EPC?",
          a: "Site survey and feasibility, engineering design, procurement of panels, inverters and structures, installation, commissioning and grid connection.",
        },
        {
          q: "Do you maintain solar plants after installation?",
          a: "Yes. We provide preventive and corrective maintenance, performance monitoring and energy-yield reporting throughout the plant's life.",
        },
      ],
    },
    ar: {
      linkText: "إنشاء محطات الطاقة الشمسية وصيانتها",
      h1: "إنشاء محطات الطاقة الشمسية وصيانتها في المملكة العربية السعودية",
      intro:
        "تصمم سام تك محطات الطاقة الشمسية الكهروضوئية بقدرة تصل إلى 5 ميجاوات وتنشئها وتصونها في المملكة العربية السعودية، بنظام تسليم المفتاح للمواقع الصناعية والتجارية ومشاريع المرافق، مع خدمات تشغيل وصيانة طويلة الأجل.",
      sectionTitle: "إنشاء محطات الطاقة الشمسية بنظام تسليم المفتاح وصيانتها",
      paragraphs: [
        "تتمتع المملكة العربية السعودية بأحد أعلى معدلات الإشعاع الشمسي في العالم، مما يجعل الطاقة الشمسية في الموقع من أكثر الطرق فعالية لخفض تكاليف الطاقة والاعتماد على الشبكة. تبدأ خدمتنا بمسح الموقع وتقييم الإشعاع الشمسي ودراسة الجدوى، ثم التصميم التفصيلي لتوزيع الألواح وهياكل التثبيت والمخططات أحادية الخط والربط بالشبكة.",
        "نورّد ونركّب الألواح الشمسية والعواكس وهياكل التثبيت وكابلات التيار المستمر والمتردد وأنظمة المراقبة، ثم نشغّل المحطة وفق المعايير الدولية.",
        "وبعد التسليم يشمل برنامج التشغيل والصيانة لدينا الصيانة الوقائية والتصحيحية ومراقبة الأداء وتقارير إنتاج الطاقة، لتواصل المحطة تحقيق إنتاجها المتوقع.",
      ],
      points: [
        "محطات طاقة شمسية كهروضوئية حتى 5 ميجاوات",
        "مسح الموقع وتقييم الإشعاع الشمسي ودراسة الجدوى",
        "تصميم الألواح وهياكل التثبيت والربط بالشبكة",
        "توريد وتركيب الألواح والعواكس والكابلات",
        "التشغيل والصيانة مع مراقبة الأداء وتقارير الإنتاج",
      ],
      faqs: [
        {
          q: "ما حجم محطات الطاقة الشمسية التي تنشئونها؟",
          a: "ننفّذ محطات طاقة شمسية كهروضوئية حتى 5 ميجاوات للعملاء الصناعيين والتجاريين والمؤسسات والمرافق.",
        },
        {
          q: "ماذا يشمل عقد EPC للطاقة الشمسية؟",
          a: "مسح الموقع ودراسة الجدوى، والتصميم الهندسي، وتوريد الألواح والعواكس والهياكل، والتركيب، والتشغيل، والربط بالشبكة.",
        },
        {
          q: "هل تصونون محطات الطاقة الشمسية بعد التركيب؟",
          a: "نعم. نقدّم الصيانة الوقائية والتصحيحية ومراقبة الأداء وتقارير إنتاج الطاقة طوال عمر المحطة.",
        },
      ],
    },
  },

  // -------------------------------------------------------------
  ro_membrane: {
    related: ["ro_plant_epc_contracts", "alltype_valve_services", "technical_manpower_supply_for_power_plant_refineries_and_water_plant"],
    en: {
      linkText: "RO plant retrofit and membrane replacement",
      h1: "RO Membrane Replacement & Plant Retrofit in Saudi Arabia",
      intro:
        "SAM Tech replaces RO membranes and retrofits ageing reverse osmosis plants in Saudi Arabia – restoring output, water quality and energy efficiency at a fraction of the cost of a new plant.",
      sectionTitle: "SWRO membrane replacement and RO plant upgrades",
      paragraphs: [
        "Over time RO membranes foul and lose salt rejection, high-pressure pumps wear and instruments become obsolete. The result is lower permeate flow, poorer water quality and higher energy use. We start with a technical audit of the existing plant to find where performance is being lost.",
        "Based on the audit we replace membranes, high-pressure pumps, pressure vessels and energy recovery devices, upgrade instrumentation and SCADA controls, and optimise pretreatment and post-treatment. The upgraded plant is recommissioned, performance-tested and handed back to your operators.",
        "Our teams have carried out seawater RO (SWRO) membrane replacement work in the GCC and serve desalination authorities, utilities and industrial water users across Saudi Arabia.",
      ],
      points: [
        "RO and SWRO membrane replacement",
        "Technical audit and performance assessment of existing plants",
        "High-pressure pump, pressure vessel and energy recovery device replacement",
        "Instrumentation and SCADA upgrades",
        "Recommissioning and performance verification",
      ],
      faqs: [
        {
          q: "When should RO membranes be replaced?",
          a: "When cleaning no longer restores permeate flow or salt rejection, or when pressure drop and energy use keep rising. A plant audit shows whether the membranes or other parts of the plant are the cause.",
        },
        {
          q: "Is retrofitting cheaper than building a new RO plant?",
          a: "Usually, yes. A retrofit keeps the existing civil works and structure and replaces only the parts that limit performance.",
        },
        {
          q: "Do you replace membranes in seawater (SWRO) plants?",
          a: "Yes. We replace membranes in seawater and other reverse osmosis plants, including removal, installation and recommissioning.",
        },
      ],
    },
    ar: {
      linkText: "تأهيل محطات التناضح العكسي واستبدال الأغشية",
      h1: "استبدال أغشية التناضح العكسي وتأهيل المحطات في المملكة العربية السعودية",
      intro:
        "تستبدل سام تك أغشية التناضح العكسي وتعيد تأهيل المحطات القديمة في المملكة العربية السعودية، لاستعادة الإنتاج وجودة المياه وكفاءة الطاقة بجزء بسيط من تكلفة محطة جديدة.",
      sectionTitle: "استبدال أغشية تحلية مياه البحر وتطوير محطات التناضح العكسي",
      paragraphs: [
        "مع الوقت تتراكم الترسبات على الأغشية وتنخفض قدرتها على رفض الأملاح، وتتآكل مضخات الضغط العالي وتتقادم الأجهزة، فينخفض إنتاج المياه وتسوء جودتها ويرتفع استهلاك الطاقة. نبدأ بتدقيق فني للمحطة القائمة لتحديد مواضع فقدان الأداء.",
        "وبناءً على التدقيق نستبدل الأغشية ومضخات الضغط العالي وأوعية الضغط وأجهزة استرجاع الطاقة، ونطوّر الأجهزة وأنظمة التحكم SCADA، ونحسّن المعالجة الأولية والنهائية. ثم نعيد تشغيل المحطة ونختبر أداءها ونسلّمها لمشغليكم.",
        "نفّذت فرقنا أعمال استبدال أغشية تحلية مياه البحر في دول الخليج، ونخدم هيئات التحلية والمرافق ومستخدمي المياه الصناعية في جميع أنحاء المملكة.",
      ],
      points: [
        "استبدال أغشية التناضح العكسي وتحلية مياه البحر",
        "تدقيق فني وتقييم أداء المحطات القائمة",
        "استبدال مضخات الضغط العالي وأوعية الضغط وأجهزة استرجاع الطاقة",
        "تطوير الأجهزة وأنظمة التحكم SCADA",
        "إعادة التشغيل والتحقق من الأداء",
      ],
      faqs: [
        {
          q: "متى يجب استبدال أغشية التناضح العكسي؟",
          a: "عندما لا يعيد التنظيف إنتاج المياه أو نسبة رفض الأملاح، أو عندما يستمر ارتفاع فرق الضغط واستهلاك الطاقة. يوضح تدقيق المحطة ما إذا كانت الأغشية أو أجزاء أخرى هي السبب.",
        },
        {
          q: "هل التأهيل أقل تكلفة من إنشاء محطة جديدة؟",
          a: "عادةً نعم، فالتأهيل يحتفظ بالأعمال المدنية والهيكل القائم ويستبدل فقط الأجزاء التي تحد من الأداء.",
        },
        {
          q: "هل تستبدلون أغشية محطات تحلية مياه البحر؟",
          a: "نعم. نستبدل الأغشية في محطات تحلية مياه البحر ومحطات التناضح العكسي الأخرى، بما يشمل الإزالة والتركيب وإعادة التشغيل.",
        },
      ],
    },
  },

  // -------------------------------------------------------------
  upvc_aluminiumdoors_windowsfabrication: {
    related: ["solar_plant_epc", "ro_plant_epc_contracts", "technical_manpower_supply_for_power_plant_refineries_and_water_plant"],
    en: {
      linkText: "UPVC and aluminium doors and windows",
      h1: "UPVC & Aluminium Doors and Windows in Saudi Arabia",
      intro:
        "SAM Tech designs, fabricates and installs UPVC and aluminium doors and windows in Saudi Arabia for industrial, commercial and residential buildings, made to handle heat, sand and humidity.",
      sectionTitle: "UPVC windows, aluminium doors and professional installation",
      paragraphs: [
        "UPVC and aluminium systems resist corrosion, extreme heat, sand and humidity far better than conventional frames, with good thermal insulation and low maintenance – well suited to the Gulf climate. We engineer each door and window to the building's structural and architectural requirements.",
        "Frames are fabricated from high-grade UPVC and aluminium profiles in our dedicated workshop, then fitted with hardware, glazing and weather seals. Our installation teams fit them on site to building standards and your programme, followed by quality inspection and functional testing.",
        "We work with main contractors, real estate developers and building owners on industrial, commercial and residential projects.",
      ],
      points: [
        "UPVC windows and doors",
        "Aluminium windows, doors and frames",
        "Custom design to structural and architectural requirements",
        "Glazing, hardware and weather sealing",
        "On-site installation, inspection and functional testing",
      ],
      faqs: [
        {
          q: "Why choose UPVC or aluminium windows in Saudi Arabia?",
          a: "They resist heat, sand, humidity and corrosion, insulate well and need little maintenance, so they last longer than conventional frames in the Gulf climate.",
        },
        {
          q: "Do you install as well as fabricate?",
          a: "Yes. We design, fabricate, supply and install, then inspect and test every door and window before sign-off.",
        },
        {
          q: "Which projects do you handle?",
          a: "Industrial complexes, commercial developments and residential projects, working with main contractors, developers and building owners.",
        },
      ],
    },
    ar: {
      linkText: "أبواب ونوافذ يو بي في سي والألمنيوم",
      h1: "أبواب ونوافذ يو بي في سي والألمنيوم في المملكة العربية السعودية",
      intro:
        "تصمم سام تك أبواب ونوافذ يو بي في سي والألمنيوم وتصنّعها وتركّبها في المملكة العربية السعودية للمباني الصناعية والتجارية والسكنية، مصممة لتحمّل الحرارة والغبار والرطوبة.",
      sectionTitle: "نوافذ يو بي في سي وأبواب الألمنيوم وتركيب احترافي",
      paragraphs: [
        "تقاوم أنظمة يو بي في سي والألمنيوم التآكل والحرارة الشديدة والغبار والرطوبة أفضل بكثير من الإطارات التقليدية، مع عزل حراري جيد وصيانة منخفضة، مما يجعلها مناسبة لمناخ الخليج. نصمم كل باب ونافذة وفق المتطلبات الإنشائية والمعمارية للمبنى.",
        "تُصنّع الإطارات من قطاعات يو بي في سي وألمنيوم عالية الجودة في ورشتنا المخصصة، ثم تُزوّد بالإكسسوارات والزجاج وموانع العوامل الجوية. وتركّبها فرقنا في الموقع وفق معايير البناء وجدولكم الزمني، مع فحص الجودة واختبار التشغيل.",
        "نعمل مع المقاولين الرئيسيين ومطوري العقارات وملاك المباني في المشاريع الصناعية والتجارية والسكنية.",
      ],
      points: [
        "نوافذ وأبواب يو بي في سي",
        "نوافذ وأبواب وإطارات ألمنيوم",
        "تصميم مخصص وفق المتطلبات الإنشائية والمعمارية",
        "الزجاج والإكسسوارات وموانع العوامل الجوية",
        "التركيب في الموقع والفحص واختبار التشغيل",
      ],
      faqs: [
        {
          q: "لماذا نختار نوافذ يو بي في سي أو الألمنيوم في السعودية؟",
          a: "لأنها تقاوم الحرارة والغبار والرطوبة والتآكل وتعزل جيدًا وتحتاج صيانة قليلة، فتدوم أطول من الإطارات التقليدية في مناخ الخليج.",
        },
        {
          q: "هل تركّبون بالإضافة إلى التصنيع؟",
          a: "نعم. نصمم ونصنّع ونورّد ونركّب، ثم نفحص كل باب ونافذة ونختبرها قبل التسليم.",
        },
        {
          q: "ما المشاريع التي تنفذونها؟",
          a: "المجمعات الصناعية والمشاريع التجارية والسكنية، بالتعاون مع المقاولين الرئيسيين والمطورين وملاك المباني.",
        },
      ],
    },
  },
};

// The /services hub page
export const SERVICES_HUB = {
  en: {
    h1: "Industrial Maintenance Services in Saudi Arabia",
    intro:
      "From safety valve testing and valve repair to leak sealing, hot tapping, heat exchanger maintenance and technical manpower, SAM Technical Service Contracting Est is a one-stop contractor for power, oil & gas, petrochemical and water plants across Saudi Arabia.",
    cta: "View service",
  },
  ar: {
    h1: "خدمات الصيانة الصناعية في المملكة العربية السعودية",
    intro:
      "من اختبار صمامات الأمان وإصلاح الصمامات إلى إحكام التسريبات والتفريع الساخن وصيانة المبادلات الحرارية وتوريد الكوادر الفنية، تُعد سام تك مقاولًا متكاملًا لمحطات الطاقة والنفط والغاز والبتروكيماويات والمياه في جميع أنحاء المملكة العربية السعودية.",
    cta: "عرض الخدمة",
  },
};
