---
title: "Backtest de Estrategia de Reversión a la Media en RTH"
description: "Análisis de una lógica de reversión a la media aplicada al S&P 500 E-mini (ES) capturando ineficiencias intradiarias durante el horario regular (RTH)."
pubDate: 2026-05-28
category: "Backtests"
oosValidated: true
---

# Backtest de Estrategia de Reversión a la Media en RTH

## Resumen Ejecutivo

La ineficiencia central explotada en este sistema radica en la excesiva extensión direccional durante la apertura del mercado americano (RTH) sin el respaldo de un delta institucional consistente.

El sistema identifica anomalías en el Order Flow midiendo el delta acumulado en extremos estadísticos (desviaciones estándar sobre VWAP) y ejecuta órdenes limitadas contra la tendencia cuando se detecta agotamiento pasivo.

## Parámetros del Sistema

- **Instrumento:** S&P 500 E-mini (ES)
- **Marco Temporal:** Gráfico de Ticks (2000t) + Order Flow
- **Horario:** Regular Trading Hours (09:30 - 16:00 EST)
- **Filtro de Tendencia:** EMA 200 > EMA 50 en marco superior (H1)
- **Riesgo por Operación:** 0.5% del Equity

## Resultados Out-of-Sample (OOS)

El modelo fue estresado con 5,000 iteraciones en simulaciones de Monte Carlo. Los resultados confirmaron robustez frente a perturbaciones de slippage y secuencias de mercado aleatorizadas.

- **Sharpe Ratio (OOS):** 2.14
- **Win Rate:** 64.2%
- **Max Drawdown:** -8.4%
- **Factor de Beneficio (Profit Factor):** 1.82

## Conclusión y Puesta en Producción

Debido a que el modelo superó satisfactoriamente los filtros de correlación y la simulación Monte Carlo, el sistema ha sido calificado como `oosValidated: true` y desplegado en servidores Live con un multiplicador de capital inicial ajustado por volatilidad (VIX-adjusted sizing).
