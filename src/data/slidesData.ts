import { SlideData, ClinicalCase } from '../types/presentation';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    questionTitle: "COMPLICACIONES EN TERAPIA INTRAVENOSA Y ACCESOS VASCULARES",
    badge: "SESIÓN CLÍNICA DIDÁCTICA",
    subtitle: "Abordaje Práctico, Humano y Basado en Evidencia para el Cuidado del Paciente",
    image: "/src/assets/images/maddox_scale_eval_1791519129438.jpg",
    imageCaption: "Evaluación integral del acceso vascular periférico: el arte de cuidar con ciencia y empatía.",
    definition: "La terapia intravenosa periférica es uno de los procedimientos invasivos más frecuentes en el entorno sanitario mundial; sin embargo, no está exenta de riesgos. Detectar a tiempo cualquier complicación no solo previene secuelas físicas y dolor, sino que protege la dignidad y el bienestar de cada persona a nuestro cuidado.",
    clinicalSigns: [
      { label: "Inspección Visual Continua", description: "Vigilar el punto de punción en cada administración o relevo de turno." },
      { label: "Palpación Suave y Térmica", description: "Evaluar induración, dolor a la presión y temperatura diferencial." },
      { label: "Escucha Activa del Paciente", description: "Cualquier reporte de ardor, quemazón o tirantez es un síntoma de alarma." },
      { label: "Registro Objetivo", description: "Utilizar escalas validadas para unificar criterios en el equipo de salud." }
    ],
    actionProtocol: [
      "1. Valorar la necesidad real de mantener la vía periférica a diario.",
      "2. Aplicar la regla de oro: calibre mínimo necesario en la vena de mayor calibre posible.",
      "3. Mantener apósito transparente estéril para permitir inspección directa sin retirar protecciones.",
      "4. Educar siempre al paciente y su familia: 'Si siente dolor, ardor o frío inusual, avísenos de inmediato'."
    ],
    clinicalPearl: "Detrás de cada catéter hay una persona con temor al dolor. Mirar el sitio de inserción no toma más de 10 segundos, pero puede evitarle días de sufrimiento y complicaciones graves.",
    sources: [
      {
        name: "GuíaSalud (AETSA)",
        url: "https://portal.guiasalud.es/gpc/terapia-intravenosa/",
        details: "Guía de Práctica Clínica sobre Terapia Intravenosa con Dispositivos No Permanentes en Adultos."
      },
      {
        name: "Infusion Nurses Society (INS)",
        url: "https://www.ins1.org/",
        details: "Infusion Therapy Standards of Practice 8th Edition."
      }
    ],
    speakerNotes: "Bienvenidos a esta sesión clínica. Hoy nos centraremos con rigor y sencillez en 5 preguntas fundamentales de nuestro quehacer diario: la Escala de Maddox, la Infiltración, la Extravasación, el Hematoma y la Flebitis. Nuestro objetivo no es solo memorizar conceptos, sino afinar el ojo clínico en la cabecera del paciente."
  },
  {
    id: 2,
    questionNumber: 1,
    questionTitle: "1. ¿QUÉ ES LA ESCALA DE MADDOX (MATTOX)?",
    badge: "VALORACIÓN CLÍNICA OBJETIVA",
    subtitle: "Instrumento visual y palpatorio para estandarizar la gravedad de la flebitis periférica",
    image: "/src/assets/images/maddox_scale_eval_1791519129438.jpg",
    imageCaption: "Graduación clínica de Maddox (0 a 5): inspección del eritema, edema y palpación del cordón venoso.",
    definition: "La Escala de Maddox es un instrumento clínico estandarizado que permite al personal de enfermería y medicina valorar de forma visual y táctil la severidad de la flebitis en el sitio de inserción de un catéter venoso periférico (CVP). Convierte una percepción subjetiva en una puntuación objetiva del 0 al 5, orientando cuándo vigilar, cuándo retirar la vía y cuándo iniciar tratamiento médico.",
    grades: [
      {
        grade: "Grado 0",
        title: "Sitio de punción sano",
        signs: "Sin dolor, sin eritema, sin induración ni calor local.",
        clinicalAction: "Mantener catéter, continuar monitorización habitual.",
        severityColor: "bg-emerald-100 text-emerald-950 border-emerald-300"
      },
      {
        grade: "Grado 1",
        title: "Dolor leve localizado",
        signs: "Dolor referido por el paciente al palpar o infundir, sin eritema visible.",
        clinicalAction: "Vigilancia estrecha cada 4 horas. Evaluar dilución del fármaco.",
        severityColor: "bg-amber-100 text-amber-950 border-amber-300"
      },
      {
        grade: "Grado 2",
        title: "Dolor + Eritema o Edema leve",
        signs: "Enrojecimiento visible en el punto de inserción con molestia palpable o leve tumefacción.",
        clinicalAction: "¡CRITERIO DE RETIRO!: En la práctica clínica se recomienda retirar el catéter y recanalizar en otro miembro.",
        severityColor: "bg-orange-100 text-orange-950 border-orange-300"
      },
      {
        grade: "Grado 3",
        title: "Dolor + Eritema + Cordón < 7.5 cm",
        signs: "Dolor, enrojecimiento, induración y cordón venoso palpable de longitud menor a 7,5 cm.",
        clinicalAction: "Retirada inmediata del catéter + inicio de tratamiento local (compresas, pomadas antiinflamatorias).",
        severityColor: "bg-rose-100 text-rose-950 border-rose-300"
      },
      {
        grade: "Grado 4",
        title: "Cordón extenso > 7.5 cm o Pus",
        signs: "Cordón venoso palpable mayor a 7,5 cm o presencia de exudado purulento franco.",
        clinicalAction: "Retiro inmediato, toma de muestra/cultivo de exudado y de la punta de catéter, valoración médica urgente.",
        severityColor: "bg-red-100 text-red-950 border-red-300"
      },
      {
        grade: "Grado 5",
        title: "Tromboflebitis avanzada / Sepsis",
        signs: "Trombosis venosa superficial extensa, compromiso tisular severo o fiebre/manifestaciones sistémicas.",
        clinicalAction: "Manejo médico multidisciplinario, antibioterapia sistémica, ecografía Doppler venosa.",
        severityColor: "bg-purple-100 text-purple-950 border-purple-300"
      }
    ],
    clinicalSigns: [
      { label: "Puntuación de Alarma (≥ 2)", description: "La mayoría de guías internacionales consideran flebitis clínicamente significativa a partir de Maddox Grado 2.", severity: "alerta" },
      { label: "Inspección + Palpación", description: "No basta con mirar: palpar con guante limpio sobre el trayecto venoso para detectar el endurecimiento cilíndrico.", severity: "grave" },
      { label: "Nota entre Colegas (Maddox vs Mattox)", description: "En terapia venosa se trata de la Escala de Maddox. Mattox es célebre en cirugía vascular/trauma por la maniobra quirúrgica de rotación medial de Mattox. Ambos son hitos médicos esenciales.", severity: "normal" }
    ],
    actionProtocol: [
      "Paso 1: Aplicar la escala al menos una vez por turno y ante cualquier queja del paciente.",
      "Paso 2: Si el puntaje es 2: Retirar el catéter de inmediato sin esperar a que empeore.",
      "Paso 3: Si el puntaje es ≥ 3: Iniciar medidas terapéuticas activas (elevación del miembro, compresas tibias o frías según indicación) y registrar en la historia clínica.",
      "Paso 4: Recanalizar siempre en una extremidad contralateral o proximal alejada del trayecto inflamado."
    ],
    clinicalPearl: "Nunca ignores a un paciente que te dice 'esta vía me molesta un poquito'. El Grado 1 es la ventana de oportunidad para salvar esa vena antes de que se convierta en un cordón doloroso y fibroso.",
    sources: [
      {
        name: "Portal GuíaSalud - Guía Terapia Intravenosa AETSA",
        url: "https://portal.guiasalud.es/wp-content/uploads/2018/12/GPC_541_Terapia_intravenosa_AETSA_compl.pdf",
        details: "Recomendaciones sobre escalas de valoración de flebitis en catéteres periféricos (Capítulo Flebitis, pág. 120-135)."
      },
      {
        name: "Scribd - Escala de Maddox y Cuidados del Acceso Venoso",
        url: "https://es.scribd.com/document/634493696/Untitled",
        details: "Protocolos de valoración clínica y criterios de retirada del catéter según grados de Maddox."
      },
      {
        name: "Infusion Nurses Society (INS)",
        url: "https://www.ins1.org/",
        details: "Criterios diagnósticos y estándares de calidad para la prevención y abordaje de la flebitis."
      }
    ],
    speakerNotes: "Al explicar la escala de Maddox, enfaticen el Grado 2 como el punto de inflexión. Muchos novatos cometen el error de dejar la vía en Grado 2 'para ver si aguanta el antibiótico'. La regla de buena práctica es clara: a partir de grado 2 se retira."
  },
  {
    id: 3,
    questionNumber: 2,
    questionTitle: "2. ¿QUÉ ES INFILTRACIÓN?",
    badge: "EVENTO ADVERSO MECÁNICO",
    subtitle: "Salida accidental de solución NO vesicante hacia los tejidos perivasculares",
    image: "/src/assets/images/iv_infiltration_1791519143407.jpg",
    imageCaption: "Mecanismo de infiltración: salida de suero hacia el espacio intersticial provocando edema frío y pálido.",
    definition: "La infiltración es la salida o fuga no intencionada de un líquido, suero o fármaco NO vesicante desde la luz de la vena hacia el tejido celular subcutáneo circundante. Al ser una solución no agresiva para el tejido (como solución salina fisiológica o suero glucosado al 5%), no quema ni necrosa la piel, pero provoca compresión mecánica, dolor sordo y alteración en la absorción del tratamiento.",
    clinicalSigns: [
      { label: "Piel Fría al Tacto", description: "Signo patognomónico: al tocar la zona con el dorso de la mano se percibe notablemente más fría que el brazo contralateral.", severity: "grave" },
      { label: "Palidez y Edema Blando", description: "Hinchazón localizada, aspecto traslúcido o tenso de la piel, con signo de fóvea positivo en ocasiones.", severity: "grave" },
      { label: "Detención del Goteo", description: "Disminución notable del flujo por gravedad o salto de alarma de presión en la bomba de infusión.", severity: "alerta" },
      { label: "Sensación de Pesadez o Tirantez", description: "El paciente describe que 'siente el brazo pesado, apretado o incómodo'.", severity: "normal" }
    ],
    etiology: [
      "Perforación accidental de la pared posterior de la vena durante la canalización o por movimientos bruscos del paciente.",
      "Desplazamiento del bisel o del teflón hacia afuera del lumen vascular por deficiente fijación.",
      "Aumento brusco de la presión venosa o fragilidad endotelial en pacientes añosos o desnutridos."
    ],
    actionProtocol: [
      "1. DETENER la infusión de inmediato en cuanto se detecte el edema.",
      "2. RETIRAR el catéter venoso periférico con suavidad.",
      "3. ELEVAR la extremidad afectada por encima del nivel del corazón para facilitar el drenaje linfático.",
      "4. APLICAR compresas secas (frías o tibias según el volumen y comodidad del paciente, evitando maceración).",
      "5. Registrar el volumen aproximado infiltrado y recanalizar en el otro brazo."
    ],
    clinicalPearl: "El signo más infalible de cabecera: pon el dorso de tus dedos sobre el sitio hinchado. Si está frío como el suero que baja de la percha, tienes una infiltración confirmada frente a tus ojos.",
    sources: [
      {
        name: "SciELO - Revista Latino-Americana de Enfermagem",
        url: "https://www.scielo.br/j/rlae/a/KbFbPcfsYpM8kssxKRyXDwB/?lang=es&format=pdf",
        details: "Factores de riesgo y complicaciones locales en terapia intravenosa periférica en pacientes hospitalizados."
      },
      {
        name: "SciELO - Estudio de Flebitis e Infiltración",
        url: "https://www.scielo.br/j/rlae/a/sXDhSvVGc5dW3bHXQwv3snk/?lang=es",
        details: "Análisis clínico de eventos adversos asociados a catéteres venosos en unidades médicas."
      },
      {
        name: "Portal GuíaSalud - GPC Terapia Intravenosa",
        url: "https://portal.guiasalud.es/wp-content/uploads/2018/12/GPC_541_Terapia_intravenosa_AETSA_compl.pdf",
        details: "Criterios de clasificación y cuidados inmediatos ante la infiltración de fluidos intravenosos."
      }
    ],
    speakerNotes: "Recuerden destacar la diferencia esencial: en la infiltración el soluto NO es vesicante. Por eso la piel se pone fría y pálida, a diferencia de la flebitis donde la piel está caliente y roja. Esta comparación térmica es oro puro para los estudiantes."
  },
  {
    id: 4,
    questionNumber: 3,
    questionTitle: "3. ¿QUÉ ES EXTRAVASACIÓN?",
    badge: "EMERGENCIA CLÍNICA VASCULAR",
    subtitle: "Fuga accidental de fármacos VESICANTES o irritantes con riesgo de necrosis tisular",
    image: "/src/assets/images/iv_extravasation_1791519152042.jpg",
    imageCaption: "Fisiopatología de la extravasación: solución vesicante destruyendo fibras dérmicas y tejido celular subcutáneo.",
    definition: "La extravasación es la salida involuntaria de un medicamento o solución VESICANTE o altamente irritante hacia los tejidos perivasculares adyacentes. A diferencia de la simple infiltración, aquí el principio activo tiene la capacidad biológica y química de lesionar gravemente las células, pudiendo provocar flictenas, úlceras profundas, necrosis tisular irreversible y pérdida de función osteotendinosa si no se actúa en cuestión de minutos.",
    clinicalSigns: [
      { label: "Dolor Urente / Quemante Intenso", description: "El paciente describe una sensación punzante de 'fuego bajo la piel' o ardor intolerable.", severity: "critico" },
      { label: "Eritema Violáceo y Tensión Tisular", description: "Zona roja o amoratada, endurecida y sumamente dolorosa al mínimo roce.", severity: "critico" },
      { label: "Aparición de Flictenas / Ampollas", description: "Desprendimiento dermoepidérmico con formación de ampollas en horas o días posteriores.", severity: "critico" },
      { label: "Escara y Necrosis Cutánea Tardía", description: "Evolución fatal del tejido si no se administraron antídotos o medidas de aspiración a tiempo.", severity: "critico" }
    ],
    etiology: [
      "Fármacos Citostáticos: Antraciclinas (doxorrubicina), alcaloides de la vinca (vincristina, vinblastina).",
      "Soluciones Electrolíticas Concentradas: Cloruro de calcio, gluconato de calcio, cloruro potásico concentrado, bicarbonato de sodio al 8.4%.",
      "Agentes Vasoactivos Hiperconcentrados: Noradrenalina, dopamina, adrenalina (causan vasoespasmo isquémico severo).",
      "Antibióticos Irritantes: Vancomicina, ciprofloxacino en bolo o alta concentración."
    ],
    actionProtocol: [
      "1. PARADA INMEDIATA: Detener la infusión en el segundo exacto que se sospeche.",
      "2. NO RETIRAR EL CATÉTER DE INMEDIATO: Aspirar de 3 a 5 ml de sangre/líquido para retirar el fármaco remanente del trayecto.",
      "3. MARCAR EL BORDE: Delimitar el perímetro del eritema con un rotulador quirúrgico para vigilar la progresión en horas.",
      "4. APLICAR ANTÍDOTO ESPECÍFICO (si existe): Ej. Dexrazoxano para antraciclinas, Hialuronidasa para alcaloides de la vinca, Fentolamina para catecolaminas.",
      "5. Retirar el catéter con suavidad, mantener la extremidad elevada y avisar a Cirugía Plástica / Oncología según protocolo hospitalario."
    ],
    clinicalPearl: "Regla sagrada: con un vesicante, no esperes a ver hinchazón. Si el paciente te dice 'me quema', tu mano debe cerrar la pinza de la vía en ese mismo instante. Cada minuto cuenta para salvar el tejido.",
    sources: [
      {
        name: "Portal GuíaSalud - Guía de Terapia Intravenosa AETSA",
        url: "https://portal.guiasalud.es/wp-content/uploads/2018/12/GPC_541_Terapia_intravenosa_AETSA_compl.pdf",
        details: "Protocolos de prevención, clasificación de agentes vesicantes y manejo farmacológico de la extravasación."
      },
      {
        name: "RUC Universidade da Coruña - Prevención y Manejo de Extravasaciones",
        url: "https://ruc.udc.es/",
        details: "Manual clínico de complicaciones locales asociadas a citostáticos y agentes hiperosmolares."
      },
      {
        name: "Sociedad Española de Oncología Médica (SEOM)",
        url: "https://seom.org/",
        details: "Guía clínica de consenso sobre el manejo de extravasación de quimioterapia."
      }
    ],
    speakerNotes: "El punto crítico que deben grabar los estudiantes: al extravasarse un vesicante, NO se retira el catéter a la carrera. Primero se aspira todo lo posible con jeringa a través de ese mismo catéter y se valora inyectar el antídoto por esa misma vía si el protocolo local lo indica."
  },
  {
    id: 5,
    questionNumber: 4,
    questionTitle: "4. ¿QUÉ ES HEMATOMA?",
    badge: "COMPLICACIÓN HEMORRÁGICA LOCAL",
    subtitle: "Colección de sangre acumulada en el espacio subcutáneo por rotura de vasos",
    image: "/src/assets/images/vein_hematoma_1791519162336.jpg",
    imageCaption: "Hematoma post-punción venosa: derrame hemático intersticial formando masa equimótica palpable.",
    definition: "Un hematoma es una acumulación o colección localizada de sangre extravasada en el tejido celular subcutáneo debida a la rotura o desgarro de las paredes de pequeños vasos (capilares, vénulas o la propia vena principal) durante el intento de canalización, durante la permanencia del catéter o tras su retirada.",
    clinicalSigns: [
      { label: "Equimosis Violácea ('Moretón')", description: "Coloración azulada, morada o negruzca característica bajo la piel.", severity: "grave" },
      { label: "Tumefacción y Tensión Local", description: "Bulto palpable o masa redondeada dolorosa al tacto y a la movilización de la extremidad.", severity: "alerta" },
      { label: "Evolución Cromática Clásica", description: "Cambio progresivo de color en los días siguientes: de violáceo a verdoso, amarillo y marrón por degradación de la hemoglobina.", severity: "normal" }
    ],
    etiology: [
      "Punciones difíciles o múltiples intentos ('pescar la vena' a ciegas dentro del tejido).",
      "Transfixión de la vena: la aguja atraviesa ambas paredes (anterior y posterior) derramando sangre por detrás.",
      "Retirada descuidada del catéter sin compresión digital hemostática firme durante el tiempo reglamentario.",
      "Fragilidad capilar extrema en ancianos, corticoterapia prolongada o pacientes bajo anticoagulación / antiagregación."
    ],
    actionProtocol: [
      "1. Suspender de inmediato el intento de punción en esa vena dañada.",
      "2. APLICAR PRESIÓN DIRECTA DIGITAL FIRME con gasa estéril durante al menos 3 a 5 minutos continuos (hasta 10 minutos si toma anticoagulantes).",
      "3. ¡NO DOBLAR EL CODO!: Si la punción fue en la flexura, mantener el brazo extendido; doblar el brazo fomenta el acúmulo de sangre en el hueco antecubital.",
      "4. Aplicar frío local las primeras 24 horas para generar vasoconstricción y reducir el tamaño del hematoma.",
      "5. Tras 48 horas: aplicar calor seco suave para favorecer la reabsorción del coágulo."
    ],
    clinicalPearl: "El error más extendido en los hospitales: pedirle al paciente que 'doble el brazo'. ¡Nunca más! El brazo debe permanecer extendido y con presión firme de tus dedos. Doblar el codo es una fábrica de hematomas.",
    sources: [
      {
        name: "RUC Universidade da Coruña - Complicaciones en Punción Venosa",
        url: "https://ruc.udc.es/",
        details: "Etiología, factores de riesgo hematológico y técnicas hemostáticas en accesos vasculares."
      },
      {
        name: "GuíaSalud - Cuidados en la Retirada de Accesos Vasculares",
        url: "https://portal.guiasalud.es/wp-content/uploads/2018/12/GPC_541_Terapia_intravenosa_AETSA_compl.pdf",
        details: "Tiempos mínimos de compresión y recomendaciones hemostáticas en pacientes con riesgo hemorrágico."
      }
    ],
    speakerNotes: "Hagan énfasis en la educación al paciente: advertirles que no froten la zona, que no doblen el brazo y que si están tomando Sintrom, heparina o aspirina, nos avisen para duplicar el tiempo de compresión."
  },
  {
    id: 6,
    questionNumber: 5,
    questionTitle: "5. ¿QUÉ ES FLEBITIS?",
    badge: "INFLAMACIÓN ENDOTELIAL VENOSA",
    subtitle: "Inflamación aguda del endotelio vascular asociada a catéteres venosos periféricos",
    image: "/src/assets/images/vein_phlebitis_1791519181826.jpg",
    imageCaption: "Flebitis en antebrazo: visualización del cordón eritematoso lineal, calor local e infiltración de la pared venosa.",
    definition: "La flebitis es la inflamación de la capa íntima o endotelio de una vena, frecuentemente producida como respuesta biológica a la presencia de un catéter venoso periférico, a la irritación química de las sustancias perfundidas o a la colonización bacteriana. Constituye una de las complicaciones más frecuentes en la práctica hospitalaria diaria y su prevención es un indicador directo de calidad asistencial.",
    clinicalSigns: [
      { label: "Dolor en el Trayecto Venoso", description: "Sensibilidad acusada o molestia espontánea que sigue el recorrido de la vena.", severity: "grave" },
      { label: "Eritema Lineal Típico", description: "Franja o línea roja que asciende por la extremidad siguiendo el trayecto del vaso sanguíneo.", severity: "grave" },
      { label: "Calor Local Palpable", description: "Aumento térmico evidente en comparación con la piel circundante sana.", severity: "grave" },
      { label: "Edema y Cordón Venoso Palpable", description: "La vena pierde su elasticidad y se palpa como una cuerda dura, rígida y sensible bajo la piel.", severity: "critico" }
    ],
    etiology: [
      "1. Flebitis Mecánica: Generada por el roce constante del catéter con la pared de la vena. Causas: catéter de calibre excesivo (ej. 18G en vena fina), fijación deficiente con 'cabeceo' del teflón, o inserción en zonas de flexión articular.",
      "2. Flebitis Química: Provocada por la infusión de fármacos o soluciones con pH no fisiológico (<5 o >9), alta osmolaridad (>600 mOsm/L como dextrosa al 10%-50% o NPT periférica) o perfusión rápida sin dilución adecuada (cloruro potásico, amiodarona).",
      "3. Flebitis Infecciosa: Debida a la colonización bacteriana por rotura de la asepsia en la punción, contaminación del apósito o manipulación de las llaves de tres pasos sin desinfección con clorhexidina alcohólica al 2%."
    ],
    actionProtocol: [
      "1. Evaluar el grado con la Escala de Maddox: Si es Grado ≥ 2, RETIRAR el catéter inmediatamente.",
      "2. Si hay secreción purulenta: tomar frotis para cultivo y remitir la punta del catéter a microbiología con técnica estéril.",
      "3. Aplicar compresas locales templadas para favorecer la circulación y aliviar el espasmo venoso.",
      "4. Indicar reposo y elevación de la extremidad afectada.",
      "5. Valorar con el médico analgesia antiinflamatoria o tromboprofilaxis según la extensión del cordón.",
      "6. Canalizar un nuevo acceso en la extremidad contralateral sana."
    ],
    clinicalPearl: "Tres preguntas de oro para prevenirla: ¿Es el catéter más pequeño que cumple el objetivo? ¿Está fijado sin moverse? ¿Se frotaron las conexiones con clorhexidina antes de conectar? Si cumples estas tres, previenes el 80% de las flebitis.",
    sources: [
      {
        name: "SalusPlay - Accesos Vasculares y Cuidados UCI",
        url: "https://www.salusplay.com/apuntes/cuidados-intensivos-uci/tema-3-accesos-vasculares",
        details: "Clasificación clínica de flebitis mecánica, química e infecciosa en pacientes hospitalizados."
      },
      {
        name: "Portal GuíaSalud - Guía de Terapia Intravenosa AETSA",
        url: "https://portal.guiasalud.es/wp-content/uploads/2018/12/GPC_541_Terapia_intravenosa_AETSA_compl.pdf",
        details: "Protocolos de prevención, higiene de manos, antisépticos y cambio de apósitos."
      },
      {
        name: "RUC Universidade da Coruña - Prevención de Flebitis",
        url: "https://ruc.udc.es/",
        details: "Evidencia científica sobre materiales de catéteres (poliuretano vs teflón) y su relación con flebitis."
      }
    ],
    speakerNotes: "Recuerden señalar los 3 tipos con ejemplos reales del hospital: mecánica cuando el paciente dobla la muñeca, química cuando pasamos potasio a toda prisa, e infecciosa cuando tocamos la conexión sin limpiar. Eso se les queda grabado para siempre."
  },
  {
    id: 7,
    questionTitle: "DIAGNÓSTICO DIFERENCIAL CLÍNICO: COMPARATIVA EN CABECERA",
    badge: "TABLA DE DECISIÓN RÁPIDA",
    subtitle: "¿Cómo distinguir en 15 segundos entre Infiltración, Extravasación, Flebitis y Hematoma?",
    image: "/src/assets/images/iv_infiltration_1791519143407.jpg",
    imageCaption: "Matriz comparativa interactiva para la toma de decisiones clínicas inmediatas.",
    definition: "En el pase de guardia o durante una urgencia no hay tiempo que perder. Reconocer las características físicas diferenciales (temperatura cutánea, coloración, tipo de dolor y gravedad tisular) es la habilidad que distingue a un profesional de la salud de excelencia.",
    clinicalSigns: [
      { label: "Temperatura: Clave Diagnóstica", description: "Piel fría = Infiltración / extravasación inicial. Piel caliente = Flebitis / celulitis.", severity: "grave" },
      { label: "Color de la Piel", description: "Pálida/blanquecina = Infiltración. Roja/eritematosa = Flebitis. Morada/azulada = Hematoma. Amoratada con flictenas = Extravasación grave.", severity: "grave" },
      { label: "Sensación del Paciente", description: "Dolor urente/fuego = Extravasación. Dolor a lo largo de la vena = Flebitis. Pesadez/tensión = Infiltración. Dolor a la presión = Hematoma.", severity: "critico" }
    ],
    actionProtocol: [
      "Regla 1: Si no estás seguro de si es infiltración o extravasación, revisa qué líquido está colgado en el suero.",
      "Regla 2: Si es un fármaco vesicante, asume siempre el peor escenario y activa el protocolo de extravasación de inmediato.",
      "Regla 3: Si hay fiebre o pus, no te limites a retirar la vía: cultiva la punta del catéter.",
      "Regla 4: Documenta siempre en notas de enfermería: fecha, hora, aspecto, medidas tomadas y notificación al médico."
    ],
    clinicalPearl: "La regla de los sentidos: Toca con el dorso (¿frío o caliente?), Mira con atención (¿pálido, rojo o morado?) y Escucha al paciente (¿pesadez, dolor sordo o ardor que quema?). Tu examen físico es más rápido que cualquier prueba.",
    sources: [
      {
        name: "GuíaSalud - Diagnóstico Diferencial en Terapia IV",
        url: "https://portal.guiasalud.es/wp-content/uploads/2018/12/GPC_541_Terapia_intravenosa_AETSA_compl.pdf",
        details: "Algoritmos de diagnóstico rápido ante eventos adversos mecánicos y químicos."
      },
      {
        name: "Infusion Nurses Society Standards of Practice",
        url: "https://www.ins1.org/",
        details: "Tablas diferenciales de complicaciones asociadas a dispositivos de acceso vascular."
      }
    ],
    speakerNotes: "Esta diapositiva es perfecta para hacer una pausa y preguntar al auditorio: ¿Qué hacen ustedes primero cuando ven un brazo hinchado? Guíenlos a tocar la temperatura y a revisar qué solución está infundiéndose."
  },
  {
    id: 8,
    questionTitle: "CALCULADORA INTERACTIVA DE MADDOX & CASOS CLÍNICOS",
    badge: "TALLER PRÁCTICO INTERACTIVO",
    subtitle: "Ponte a prueba: evalúa casos reales y determina la conducta de enfermería correcta",
    image: "/src/assets/images/vein_phlebitis_1791519181826.jpg",
    imageCaption: "Aplica los criterios clínicos aprendidos en escenarios del día a día hospitalario.",
    definition: "La teoría se consolida con la práctica. A continuación puedes utilizar el evaluador interactivo de la Escala de Maddox y resolver 5 casos clínicos reales tomados de la práctica hospitalaria para medir tu ojo clínico.",
    clinicalSigns: [
      { label: "Caso 1: Doña Carmen (72 años)", description: "Suero salino, piel fría, blanca y swollen. ¿Diagnóstico y conducta?" },
      { label: "Caso 2: Don Javier (58 años)", description: "Quimioterapia con Doxorrubicina, refiere fuego quemante intenso en dorso de mano." },
      { label: "Caso 3: Paciente postoperado (45 años)", description: "Catéter en flexura, franja roja lineal y cordón palpable de 4 cm." },
      { label: "Caso 4: Paciente en diálisis (63 años)", description: "Masa violácea abultada tras retirar vía sin hacer compresión adecuada." }
    ],
    actionProtocol: [
      "1. Selecciona los hallazgos en la calculadora interactiva.",
      "2. Analiza las opciones de cada caso clínico.",
      "3. Lee la retroalimentación humanizada con razonamiento clínico.",
      "4. Consulta las recomendaciones de seguridad del paciente."
    ],
    clinicalPearl: "En la docencia en salud, un error cometido en un simulador es una vida o una vena salvada en la vida real. Disfruta el aprendizaje y comparte con tus compañeros.",
    sources: [
      {
        name: "Portal GuíaSalud AETSA",
        url: "https://portal.guiasalud.es/wp-content/uploads/2018/12/GPC_541_Terapia_intravenosa_AETSA_compl.pdf",
        details: "Casos y algoritmos de buena práctica clínica."
      },
      {
        name: "SciELO Artículos Clínicos",
        url: "https://www.scielo.br/j/rlae/a/KbFbPcfsYpM8kssxKRyXDwB/?lang=es&format=pdf",
        details: "Análisis de casos reales de terapia intravenosa."
      }
    ],
    speakerNotes: "Inviten a los participantes a participar activamente con los botones de la pantalla. Cada caso refuerza los conceptos de Maddox, Infiltración, Extravasación, Hematoma y Flebitis."
  },
  {
    id: 9,
    questionTitle: "DECÁLOGO DE ORO: PREVENCIÓN Y SEGURIDAD DEL PACIENTE",
    badge: "BUENAS PRÁCTICAS CLÍNICAS",
    subtitle: "10 mandamientos de enfermería y medicina para accesos vasculares seguros",
    image: "/src/assets/images/maddox_scale_eval_1791519129438.jpg",
    imageCaption: "Cuidado humanizado y técnica aséptica: los dos pilares de la excelencia hospitalaria.",
    definition: "Prevenir una complicación es infinitamente mejor y menos doloroso que tratarla. Este decálogo sintetiza las mejores recomendaciones internacionales de GuíaSalud, la Infusion Nurses Society y los protocolos de seguridad del paciente de la OMS.",
    clinicalSigns: [
      { label: "1. Calibre Menor Posible", description: "Usa 20G o 22G para la mayoría de soluciones. Deja 18G solo para hemocomponentes rápidos o quirófano." },
      { label: "2. Evitar Zonas de Flexión", description: "Prioriza el antebrazo. Evita la flexura del codo y la muñeca para no causar flexiones mecánicas." },
      { label: "3. Clorhexidina al 2%", description: "Desinfectar enérgicamente con fricción durante 30 segundos y dejar secar al aire por completo." },
      { label: "4. Apósito Transparente", description: "Permite ver el punto de punción las 24 horas del día sin manipular ni levantar el vendaje." }
    ],
    actionProtocol: [
      "5. Fijación sin cabeceo: Un catéter que se mueve es una flebitis mecánica garantizada.",
      "6. Frotado alcohólico de las válvulas antes de cada conexión ('Scrub the hub' por 15 segundos).",
      "7. Evaluar con Maddox en cada turno y registrar en la historia.",
      "8. Retirar la vía en cuanto deje de ser estrictamente necesaria (revisión diaria).",
      "9. Si retiras la vía: compresión hemostática firme 3 a 5 minutos, NUNCA doblar el brazo.",
      "10. Comunicación humana: explicar al paciente qué esperar y pedirle que avise si nota molestia."
    ],
    clinicalPearl: "La técnica perfecta no vale nada si no tratamos a la persona con calidez. Preguntarle al paciente '¿cómo siente el bracito hoy?' y mirarlo a los ojos es el mejor acto médico y de enfermería.",
    sources: [
      {
        name: "Organización Mundial de la Salud (OMS)",
        url: "https://www.who.int/es",
        details: "Directrices sobre higiene de manos y prevención de infecciones del torrente sanguíneo."
      },
      {
        name: "Portal GuíaSalud - GPC Terapia Intravenosa",
        url: "https://portal.guiasalud.es/wp-content/uploads/2018/12/GPC_541_Terapia_intravenosa_AETSA_compl.pdf",
        details: "Recomendaciones basadas en la evidencia científica para la seguridad del paciente."
      }
    ],
    speakerNotes: "Cierre inspirador: La enfermería es ciencia y ternura. Cuidar una vía periférica es cuidar la vida y el confort de quien confía en nosotros."
  },
  {
    id: 10,
    questionTitle: "FUENTES BIBLIOGRÁFICAS Y EVIDENCIA CIENTÍFICA",
    badge: "REFERENCIAS Y LECTURAS RECOMENDADAS",
    subtitle: "Sustento bibliográfico riguroso de cada uno de los temas desarrollados",
    image: "/src/assets/images/vein_hematoma_1791519162336.jpg",
    imageCaption: "Evidencia científica consultada para garantizar la máxima integridad médica y docente.",
    definition: "Toda la información expuesta en esta presentación interactiva ha sido contrastada con guías de práctica clínica internacionales, manuales universitarios y bases de datos biomédicas reconocidas.",
    clinicalSigns: [
      { label: "Portal GuíaSalud (España / AETSA)", description: "Guía de Práctica Clínica sobre Terapia Intravenosa con Dispositivos No Permanentes en Adultos. Ministerio de Sanidad." },
      { label: "SciELO (Revista Latino-Americana)", description: "Estudios sobre flebitis, infiltración y eventos adversos en terapia intravenosa periférica." },
      { label: "Scribd Documentos Docentes", description: "Manuales de valoración clínica de accesos vasculares y Escala de Maddox en enfermería." },
      { label: "SalusPlay Formación Sanitaria", description: "Temario oficial de Cuidados Intensivos: accesos vasculares periféricos y flebitis mecánica/química/infecciosa." },
      { label: "RUC Universidade da Coruña", description: "Complicaciones locales asociadas a catéteres venosos, extravasación y hemostasia." },
      { label: "Infusion Nurses Society (INS)", description: "Infusion Therapy Standards of Practice (2021-2024)." }
    ],
    actionProtocol: [
      "Puedes acceder directamente a las fuentes oficiales haciendo clic en los enlaces de cada tarjeta.",
      "Recomendado para estudiantes de enfermería, medicina, técnicos en cuidados auxiliares y profesionales de UCI / Urgencias."
    ],
    clinicalPearl: "La mejor medicina se ejerce cuando la evidencia más actualizada se une al trato más humano y compasivo.",
    sources: [
      {
        name: "Portal GuíaSalud AETSA (PDF Completo)",
        url: "https://portal.guiasalud.es/wp-content/uploads/2018/12/GPC_541_Terapia_intravenosa_AETSA_compl.pdf",
        details: "Documento oficial del Sistema Nacional de Salud sobre Terapia Intravenosa."
      },
      {
        name: "SciELO - Repositorio Científico de Enfermería",
        url: "https://www.scielo.br/j/rlae/a/KbFbPcfsYpM8kssxKRyXDwB/?lang=es&format=pdf",
        details: "Investigación sobre eventos adversos en accesos vasculares periféricos."
      },
      {
        name: "SalusPlay - Tema 3 Accesos Vasculares",
        url: "https://www.salusplay.com/apuntes/cuidados-intensivos-uci/tema-3-accesos-vasculares",
        details: "Módulo especializado en cuidados intensivos y flebitis."
      },
      {
        name: "RUC Repositorio Universidade da Coruña",
        url: "https://ruc.udc.es/",
        details: "Publicaciones sobre extravasación de citostáticos y hematomas."
      },
      {
        name: "Scribd - Apuntes Maddox",
        url: "https://es.scribd.com/document/634493696/Untitled",
        details: "Protocolo de evaluación y manejo de flebitis según grados de Maddox."
      }
    ],
    speakerNotes: "Agradecemos la atención de todos los participantes. Esta presentación queda disponible para estudio, repaso interactivo y consulta rápida en el servicio."
  }
];

export const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: 1,
    patientScenario: "Paciente de 68 años con suero fisiológico al 0.9% a 80 ml/h en el dorso de la mano izquierda. Al evaluar el punto de inserción encuentras la piel hinchada, pálida, translúcida y muy fría al tacto en comparación con la otra mano. La bomba de infusión acaba de pitar por alarma de oclusión.",
    symptoms: ["Piel fría y pálida", "Edema blando localizado", "Alarma de oclusión en bomba", "Solución no vesicante (suero fisiológico)"],
    options: [
      {
        id: "a",
        label: "Flebitis bacteriana aguda (Grado 4 de Maddox)",
        isCorrect: false,
        explanation: "Incorrecto: La flebitis produce piel caliente y eritematosa (roja), no fría ni pálida."
      },
      {
        id: "b",
        label: "Infiltración por desplazamiento de catéter",
        isCorrect: true,
        explanation: "¡Correcto! Es el cuadro típico de infiltración: solución no vesicante acumulada en tejido subcutáneo produciendo piel fría, pálida y edema blando."
      },
      {
        id: "c",
        label: "Extravasación con necrosis celular inminente",
        isCorrect: false,
        explanation: "Incorrecto: El suero salino al 0.9% no es vesicante ni necrosante; se trata de una infiltración no vesicante."
      },
      {
        id: "d",
        label: "Hematoma post-punción",
        isCorrect: false,
        explanation: "Incorrecto: No hay colección sanguínea ni coloración violácea."
      }
    ],
    expertTeaching: "Conducta inmediata: Detener la infusión, retirar la vía, elevar la extremidad para reabsorber el edema y canalizar en el brazo opuesto."
  },
  {
    id: 2,
    patientScenario: "Paciente oncológica de 54 años recibiendo Doxorrubicina (antraciclina vesicante) en antebrazo derecho. De pronto te avisa con angustia: 'Enfermera, me quema horrible la vena, siento un fuego insoportable'. Observas ligera tumefacción y eritema en el bisel.",
    symptoms: ["Fármaco vesicante de alto riesgo", "Dolor urente / sensación de quemazón intensa", "Eritema localizado inmediato"],
    options: [
      {
        id: "a",
        label: "Tranquilizar al paciente y bajar la velocidad del goteo",
        isCorrect: false,
        explanation: "¡Peligro! Con un fármaco vesicante jamás se reduce la velocidad; se debe suspender la perfusión en el acto."
      },
      {
        id: "b",
        label: "Extravasación de fármaco vesicante: detener infusión de inmediato, aspirar remanente y activar protocolo con antídoto",
        isCorrect: true,
        explanation: "¡Impecable! Es una emergencia médica: la doxorrubicina necrosa el tejido en pocas horas si no se aspira y se administra antídoto específico (dexrazoxano)."
      },
      {
        id: "c",
        label: "Retirar bruscamente la aguja y frotar con alcohol",
        isCorrect: false,
        explanation: "Incorrecto y peligroso: no retires antes de aspirar con jeringa el medicamento acumulado, y nunca frotes la zona."
      },
      {
        id: "d",
        label: "Flebitis mecánica grado 1",
        isCorrect: false,
        explanation: "Incorrecto: El dolor urente severo y la infusión de un vesicante definen una extravasación activa."
      }
    ],
    expertTeaching: "Recuerda: Parar infusión, aspirar líquido con jeringa a través de la vía, marcar el borde con rotulador, aplicar antídoto según protocolo y avisar al oncólogo."
  },
  {
    id: 3,
    patientScenario: "Paciente de 42 años con catéter venoso periférico hace 48 horas en antebrazo. Al palpar el trayecto de la vena cefálica, el paciente refiere dolor evidente. Observas una franja eritematosa continua de 4 cm y al pasar los dedos sientes una estructura cilíndrica dura como una cuerda.",
    symptoms: ["Eritema en trayecto venoso", "Dolor a la palpación", "Cordón venoso indurado palpable de 4 cm", "Calor local"],
    options: [
      {
        id: "a",
        label: "Flebitis Grado 3 en la Escala de Maddox",
        isCorrect: true,
        explanation: "¡Exacto! Dolor + eritema + cordón venoso palpable < 7.5 cm corresponde exactamente al Grado 3 de Maddox. Exige retirada inmediata y tratamiento antiinflamatorio local."
      },
      {
        id: "b",
        label: "Infiltración simple grado 1",
        isCorrect: false,
        explanation: "Incorrecto: Hay eritema, calor y cordón venoso, signos inflamatorios ausentes en la infiltración."
      },
      {
        id: "c",
        label: "Hematoma subcutáneo organizado",
        isCorrect: false,
        explanation: "Incorrecto: No es sangre extravasada sino una vena inflamada y trombosada de forma lineal."
      },
      {
        id: "d",
        label: "Maddox Grado 1 (solo vigilar)",
        isCorrect: false,
        explanation: "Incorrecto: Maddox Grado 1 es solo dolor sin eritema ni cordón. Aquí ya hay cordón palpable."
      }
    ],
    expertTeaching: "Conducta: Retirar el catéter de inmediato, aplicar calor local templado, reposo del brazo, registrar en historia clínica y recanalizar en la extremidad contralateral."
  },
  {
    id: 4,
    patientScenario: "Tras una extracción sanguínea difícil con múltiples intentos en la fosa antecubital, el paciente flexiona el codo mientras se marcha. A los 20 minutos regresa mostrando una masa abultada de 5 cm de diámetro, de color morado negruzco y dolorosa a la compresión.",
    symptoms: ["Múltiples intentos de punción", "Flexión del codo sin presión mantenida", "Coloración morada-violácea", "Masa subcutánea blanda y dolorosa"],
    options: [
      {
        id: "a",
        label: "Flebitis química",
        isCorrect: false,
        explanation: "Incorrecto: No se infundió ningún fármaco irritante, fue una extracción sanguínea mecánica."
      },
      {
        id: "b",
        label: "Hematoma post-punción venosa",
        isCorrect: true,
        explanation: "¡Excelente! La sangre se derramó al tejido celular subcutáneo por perforación vascular y falta de compresión hemostática adecuada (empeorado por doblar el codo)."
      },
      {
        id: "c",
        label: "Extravasación vesicante",
        isCorrect: false,
        explanation: "Incorrecto: No hubo solución vesicante, solo rotura capilar/venosa con acumulación hemática."
      },
      {
        id: "d",
        label: "Trombosis venosa profunda",
        isCorrect: false,
        explanation: "Incorrecto: Es una colección hemática superficial postraumática evidente."
      }
    ],
    expertTeaching: "Prevención: Mantener el brazo extendido con compresión digital firme 3 a 5 minutos continuos. Si ya se formó: frío local las primeras 24 h y calor a partir de las 48 h."
  },
  {
    id: 5,
    patientScenario: "Vas a administrar cloruro de potasio concentrado (ClK 40 mEq) en un suero de 250 ml a través de un catéter 22G en una vena muy fina de la muñeca. ¿Qué complicación es la más probable y cómo debes prevenirla?",
    symptoms: ["Solución hipertónica e irritante", "Vena periférica de pequeño calibre", "Zona de flexión articular (muñeca)"],
    options: [
      {
        id: "a",
        label: "Hematoma masivo instantáneo",
        isCorrect: false,
        explanation: "Incorrecto: El hematoma se produce por desgarro vascular mecánico, no por la composición química del suero."
      },
      {
        id: "b",
        label: "Flebitis química y mecánica; prevenir eligiendo vena de mayor calibre, diluyendo adecuadamente y evitando la flexión",
        isCorrect: true,
        explanation: "¡Totalmente acertado! El potasio es sumamente irritante para el endotelio (flebitis química) y la muñeca sufre roce por movimiento (flebitis mecánica). Se debe usar una vena amplia del antebrazo, perfusión lenta y buena dilución."
      },
      {
        id: "c",
        label: "No existe riesgo si se usa bomba de infusión",
        isCorrect: false,
        explanation: "Incorrecto: La bomba controla el ritmo, pero no reduce la irritación química del soluto ni el roce mecánico."
      },
      {
        id: "d",
        label: "Infiltración benigna obligatoria",
        isCorrect: false,
        explanation: "Incorrecto: No es una complicación obligatoria, sino un error de planificación del acceso venoso."
      }
    ],
    expertTeaching: "Regla de oro: Fármacos irritantes o hiperosmolares deben ir siempre en venas de gran calibre con buen flujo sanguíneo hemodinámico para una rápida hemodilución."
  }
];
