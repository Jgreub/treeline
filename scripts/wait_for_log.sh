#!/usr/bin/env bash

# Waits until the logfile prints a line with the search text

logfile=$1
search_text=$2

echo "Searching for \"${search_text}\" in ${logfile}..."

fifo=/tmp/tmpfifo.$$
mkfifo ${fifo}

tail -f ${logfile} > ${fifo} &
tailpid=$!

grep -m 1 "${search_text}" ${fifo} -q

kill ${tailpid}
wait ${tailpid} 2> /dev/null

rm ${fifo}

echo "Found \"${search_text}\" in ${logfile}!"