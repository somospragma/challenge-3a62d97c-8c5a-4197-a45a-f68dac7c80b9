# Mejora de la calidad del código en un proyecto eCommerce con POO

El equipo de desarrollo de una plataforma eCommerce construida con Vtex ha identificado brechas en la aplicación de las técnicas de POO. El sistema actual tiene problemas de mantenibilidad y escalabilidad debido a una mala aplicación de herencia, abstracción, acoplamiento y encapsulamiento. Necesitas mejorar la calidad del código utilizando estas técnicas para que el sistema sea más robusto y escalable.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Técnicas de Programación Orientada a Objetos (POO) |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 4-6 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Refactorización de herencia y abstracción

**Objetivo:** Identificar y aplicar correctamente los principios de herencia y abstracción en el código existente.

**Tiempo estimado:** 1-2 horas

**Instrucciones:**

- Analiza el código actual para identificar clases que podrían beneficiarse de la herencia.
- Crea una jerarquía de clases que utilice la herencia para eliminar código duplicado y mejorar la reutilización.
- Aplica el principio de abstracción para ocultar detalles de implementación y exponer solo lo necesario.

**Entregable:** Código refactorizado con herencia y abstracción aplicada correctamente.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo las clases pueden compartir comportamientos comunes.
- Considera qué detalles de implementación pueden ser ocultos para simplificar la interfaz de las clases.

</details>

### Fase 2: Reducción de acoplamiento

**Objetivo:** Identificar y reducir el acoplamiento entre clases para mejorar la mantenibilidad del código.

**Tiempo estimado:** 1-2 horas

**Instrucciones:**

- Analiza las dependencias entre clases y identifica puntos de alto acoplamiento.
- Aplica técnicas para reducir el acoplamiento, como la introducción de interfaces o clases de fachada.
- Reescribe el código para que las clases dependan de abstracciones en lugar de implementaciones concretas.

**Entregable:** Código refactorizado con menor acoplamiento entre clases.

<details>
<summary>Pistas de conocimiento</summary>

- Considera el uso de interfaces para definir contratos entre clases.
- Piensa en cómo las clases de fachada pueden ocultar la complejidad interna de un módulo.

</details>

### Fase 3: Aplicación de encapsulamiento

**Objetivo:** Aplicar el principio de encapsulamiento para proteger los datos y comportamientos internos de las clases.

**Tiempo estimado:** 1-2 horas

**Instrucciones:**

- Identifica los atributos y métodos que deben ser privados para proteger el estado interno de las clases.
- Aplica el encapsulamiento utilizando métodos getter y setter cuando sea necesario.
- Asegura que las clases solo expongan lo necesario y que los detalles de implementación permanezcan ocultos.

**Entregable:** Código refactorizado con encapsulamiento aplicado correctamente.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo los métodos getter y setter pueden controlar el acceso a los atributos privados.
- Considera el uso de encapsulamiento para proteger la integridad de los datos y comportamientos internos.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es la herencia en POO y cómo se aplica en este reto?
- **paraQueSirve**: ¿Para qué sirve la abstracción en POO y cómo la aplicaste en la fase 1?
- **comoSeUsa**: ¿Cómo se usa el encapsulamiento para proteger los datos internos de una clase?
- **erroresComunes**: ¿Cuáles son los errores comunes al aplicar el acoplamiento y cómo los evitaste en la fase 2?
- **queDecisionesImplica**: ¿Qué decisiones implica la aplicación de herencia y cómo las tomaste en la fase 1?

## Criterios de Evaluacion

- Identificación y aplicación correcta de herencia y abstracción.
- Reducción efectiva del acoplamiento entre clases.
- Aplicación correcta del encapsulamiento para proteger los datos internos.
- Justificación de las decisiones tomadas durante el proceso de refactorización.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
