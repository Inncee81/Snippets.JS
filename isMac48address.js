// A media access control address(MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.
// The standard(IEEE 802) format for printing MAC - 48 addresses in human - friendly form is six groups of two hexadecimal digits(0 to 9 or A to F), separated by hyphens(e.g. 01 - 23 - 45 - 67 - 89 - AB).

//     Example
// For inputString = "00-1B-63-84-45-E6", the output should be
// isMAC48Address(inputString) = true;
// For inputString = "Z1-1B-63-84-45-E6", the output should be
// isMAC48Address(inputString) = false;
// For inputString = "not a MAC-48 address", the output should be
// isMAC48Address(inputString) = false.

// true if inputString corresponds to MAC - 48 address naming rules, false otherwise.

const isMAC48Address = inputString => {
  const regex = RegExp(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/);
  return regex.test(inputString);
};
